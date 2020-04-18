import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useCharacters from './useCharacters';
import { getCharacterDetails } from '../redux/actions/characters';

const useCharacter = (id) => {
	const controller = new AbortController();
	const { data, error, fetched } = useCharacters();
	const loading = useSelector((s) => s.characters.loading);
	const token = useSelector((s) => s.auth.token);
	const dispatch = useDispatch();
	const character = data?.[id];

	useEffect(() => {
		if (fetched && !character.detailsLoaded) {
			dispatch(getCharacterDetails(character, token, controller));
		}

		return () => controller.abort();
	}, [fetched]);

	return { character, error, loading };
};

export default useCharacter;
