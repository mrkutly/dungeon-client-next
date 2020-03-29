import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../redux/actions/search';

const sanitize = (string) => string?.toLowerCase().replace(/[^0-9a-z]/gi, '');

const useSearch = (type, query) => {
	const dispatch = useDispatch();
	const error = useSelector((s) => s.search[type].error);
	const loading = useSelector((s) => s.search[type].loading);
	const unfiltered = useSelector((s) => s.search[type].data);
	const sanitizedQuery = sanitize(query);
	const matcher = new RegExp(sanitizedQuery, 'i');
	const data = Object.values(unfiltered).filter((d) => matcher.test(sanitize(d.name)));

	useEffect(() => {
		if (!(query?.length > 0)) return;

		const controller = new AbortController();
		dispatch(search(type, query, controller));

		return () => controller.abort();
	}, [query]);

	return { data, error, loading };
};

export default useSearch;
