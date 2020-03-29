import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../redux/actions/search';

const useSearch = (type, query) => {
	const dispatch = useDispatch();
	const error = useSelector((s) => s.search[type].error);
	const loading = useSelector((s) => s.search[type].loading);
	const unfiltered = useSelector((s) => s.search[type].data);
	const matcher = new RegExp(query, 'i');
	const data = Object.values(unfiltered).filter((d) => matcher.test(d.index));

	useEffect(() => {
		if (!(query?.length > 0)) return;

		const controller = new AbortController();
		dispatch(search(type, query, controller));

		return () => controller.abort();
	}, [query]);

	return { data, error, loading };
};

export default useSearch;
