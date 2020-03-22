import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCharacters } from '../redux/actions/characters';

const useCharacters = () => {
	const data = useSelector((s) => s.characters.data);
	const error = useSelector((s) => s.characters.error);
	const token = useSelector((s) => s.auth.token);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!data && token) {
			dispatch(loadCharacters(token));
		}
	}, []);

	return { data, error };
};

export default useCharacters;
