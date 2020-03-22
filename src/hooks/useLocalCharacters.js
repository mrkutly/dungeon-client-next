import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { characterLoadSuccess, localCharacterLoadFailed, loadCharacters } from '../redux/actions/characters';

const useLocalCharacters = () => {
	const { data, checkedLocal } = useSelector((s) => s.characters);
	const { token } = useSelector((s) => s.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!data) {
			if (!checkedLocal) {
				const foundCharacters = localStorage.getItem('characters');
				if (foundCharacters) {
					dispatch(characterLoadSuccess(JSON.parse(foundCharacters)));
				} else {
					dispatch(localCharacterLoadFailed());
				}
			}	else if (token) {
				dispatch(loadCharacters(token));
			}
		}
	}, [token, checkedLocal]);

	return null;
};

export default useLocalCharacters;
