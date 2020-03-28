import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCharacters } from '../redux/actions/characters';

const useCharacters = () => {
	const controller = new AbortController();
	const data = useSelector((s) => s.characters.data);
	const fetched = useSelector((s) => s.characters.fetched);
	const error = useSelector((s) => s.characters.error);
	const token = useSelector((s) => s.auth.token);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!fetched && token) {
			dispatch(loadCharacters(token, controller));
		}

		return () => controller.abort();
	}, []);

	return { data, error };
};

export default useCharacters;
