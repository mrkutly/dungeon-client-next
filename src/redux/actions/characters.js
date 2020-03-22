import * as Actions from '../actionTypes';
import { get } from '../../lib/fetches';

/**
 * CHARACTER ACTIONS
 */

export const characterLoadStarted = () => ({
	type: Actions.CHARACTER_LOAD_STARTED,
});

export const characterLoadError = (error) => ({
	type: Actions.CHARACTER_LOAD_ERROR,
	payload: error.message,
});

export const characterLoadSuccess = (token) => ({
	type: Actions.CHARACTER_LOAD_SUCCESS,
	payload: token,
});

export const localCharacterLoadFailed = () => ({
	type: Actions.LOCAL_CHARACTER_LOAD_FAILED,
});

export const loadCharacters = (token) => async (dispatch) => {
	try {
		dispatch(characterLoadStarted());
		const result = await get('/characters', token);
		if (result.error) throw new Error(result.error);
		dispatch(characterLoadSuccess(result.characters));
		localStorage.setItem('characters', JSON.stringify(result.characters));
	} catch (error) {
		dispatch(characterLoadError(error));
	}
};
