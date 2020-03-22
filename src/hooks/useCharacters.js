import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCharacters } from '../redux/actions/characters';

const useCharacters = () => {
	const { data, error, loading } = useSelector((s) => s.characters);
	const { token } = useSelector((s) => s.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!data && token) {
			dispatch(loadCharacters(token));
		}
	}, []);

	return { data, error, loading };
};

export default useCharacters;
