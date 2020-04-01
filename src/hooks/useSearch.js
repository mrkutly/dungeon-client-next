import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { loadData, cacheResult } from '../redux/actions/search';
import { EQUIPMENT } from '../redux/attributeTypes';
import sanitize from '../lib/sanitize';

const useSearch = (type, query) => {
	const charId = Router.query.id;
	const dispatch = useDispatch();
	const error = useSelector((s) => s.search[type].error);
	const loading = useSelector((s) => s.search[type].loading);
	const unfiltered = useSelector((s) => s.search[type].data);
	const cache = useSelector((s) => s.search[type].cache);
	const dataFetched = unfiltered.length > 0;
	const sanitizedQuery = sanitize(query);

	const characterAttributes = useSelector((s) => s.characters.data[charId][type]);
	const characterHasAttribute = (attribute) => {
		let charHasAttr = characterAttributes.some((a) => a._id === attribute._id);

		if (type === EQUIPMENT) {
			charHasAttr = characterAttributes.some((a) => a.item._id === attribute._id);
		}

		return charHasAttr;
	};

	let data = [];

	// check the redux cache of query results
	if (cache[sanitizedQuery] && dataFetched) {
		data = cache[sanitizedQuery];

		// if we did not find a cached query, filter them and cache the result
	} else if (dataFetched && sanitizedQuery?.length > 0) {
		const matcher = new RegExp(sanitizedQuery, 'i');

		data = unfiltered.filter((d) => {
			const matchesName = matcher.test(sanitize(d.name));
			const matchesClass = matcher.test(sanitize(d.class?.name));
			return matchesName || matchesClass;
		});

		dispatch(cacheResult({ type, query: sanitizedQuery, result: data }));

		// otherwise (the query is empty), just send all the data
	} else {
		data = unfiltered;
	}

	// we unfortunately have to check if the character has the attribute after
	// checking the cache for queries. This saves us from having to do
	// complicated cache invalidation when the character is updated.
	data = data.filter((attr) => !characterHasAttribute(attr));

	useEffect(() => {
		const controller = new AbortController();
		dispatch(loadData(type, controller));

		return () => controller.abort();
	}, []);

	return { data, error, loading };
};

export default useSearch;
