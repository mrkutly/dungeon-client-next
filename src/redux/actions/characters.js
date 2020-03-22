import * as Actions from '../actionTypes';
import { get } from '../../lib/fetches';

/**
 * CHARACTERS ACTIONS
 */

export const characterLoadStarted = () => ({
	type: Actions.CHARACTER_LOAD_STARTED,
});

export const characterLoadError = (error) => ({
	type: Actions.CHARACTER_LOAD_ERROR,
	payload: error.message,
});

export const characterLoadSuccess = (characters) => ({
	type: Actions.CHARACTER_LOAD_SUCCESS,
	payload: characters,
});

export const loadCharacters = (token) => async (dispatch) => {
	try {
		dispatch(characterLoadStarted());
		const result = await get('/characters', token);
		if (result.error) throw new Error(result.error);
		dispatch(characterLoadSuccess(result.characters));
	} catch (error) {
		dispatch(characterLoadError(error));
	}
};

/**
 * ACTIVE CHARACTER ACTIONS
 */

export const characterDetailsLoadStarted = () => ({
	type: Actions.CHARACTER_DETAILS_LOAD_STARTED,
});

export const characterDetailsLoadSuccess = (character) => ({
	type: Actions.CHARACTER_DETAILS_LOAD_SUCCESS,
	payload: character,
});


export const selectCharacter = (id) => ({
	type: Actions.SELECT_CHARACTER,
	payload: id,
});

export const getCharacterDetails = (character, token) => async (dispatch) => {
	if (character.detailsLoaded) {
		dispatch(selectCharacter(character.id));
		return;
	}
	try {
		dispatch(characterDetailsLoadStarted(character.id));
		const response = await get(`/characters/${character.id}`, token);
		if (response.error) {
			throw new Error(response.error);
		}
		dispatch(characterDetailsLoadSuccess(response.character));
	} catch (error) {
		dispatch(characterLoadError(error));
	}
};
