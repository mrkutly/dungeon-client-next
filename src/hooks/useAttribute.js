// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { loadAttribute } from '../redux/actions/attributes';

// const useAttribute = (type, id) => {
// 	const controller = new AbortController();
// 	const dispatch = useDispatch();
// 	const data = useSelector((s) => s.attributes[type][id]);
// 	const { error, loading } = useSelector((s) => ({
// 		error: s.attributes.error,
// 		loading: s.attributes.loading,
// 	}));

// 	useEffect(() => {
// 		if (!data) {
// 			dispatch(loadAttribute(type, id, controller));
// 		}

// 		return () => controller.abort();
// 	}, []);

// 	return { data, error, loading };
// };

// export default useAttribute;
