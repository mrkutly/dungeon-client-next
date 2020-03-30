import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData, cacheResult } from '../redux/actions/search';
import sanitize from '../lib/sanitize';

const useSearch = (type, query) => {
	const dispatch = useDispatch();
	const error = useSelector((s) => s.search[type].error);
	const loading = useSelector((s) => s.search[type].loading);
	const unfiltered = useSelector((s) => s.search[type].data);
	const cache = useSelector((s) => s.search[type].cache);
	const dataFetched = unfiltered.length > 0;
	const sanitizedQuery = sanitize(query);
	let data = [];

	// check the redux cache of query results
	if (cache[sanitizedQuery] && dataFetched) {
		data = cache[sanitizedQuery];

		// if we did not find a cached query, filter them and cache the result
	} else if (dataFetched && sanitizedQuery?.length > 0) {
		const matcher = new RegExp(sanitizedQuery, 'i');
		data = unfiltered.filter((d) => matcher.test(sanitize(d.name)));
		dispatch(cacheResult({ type, query: sanitizedQuery, result: data }));

		// otherwise (the query is empty), just send all the data
	} else {
		data = unfiltered;
	}

	useEffect(() => {
		if (!(query?.length > 0) || dataFetched) return;

		const controller = new AbortController();
		dispatch(loadData(type, controller));

		return () => controller.abort();
	}, [query]);

	return { data, error, loading };
};

export default useSearch;
