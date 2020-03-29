import * as Actions from '../actionTypes';
import { get, put } from '../../lib/fetches';

/**
 * CHARACTERS ACTIONS
 */

export const addCharacter = (character) => ({
	type: Actions.ADD_CHARACTER,
	payload: character,
});

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

export const loadCharacters = (token, controller) => async (dispatch) => {
	try {
		dispatch(characterLoadStarted());
		const result = await get('/characters', token, controller);
		if (result.error) throw new Error(result.error);
		dispatch(characterLoadSuccess(result.characters));
	} catch (error) {
		if (!controller.signal.aborted) {
			dispatch(characterLoadError(error));
		}
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


export const getCharacterDetails = (character, token, controller) => async (dispatch) => {
	if (character.detailsLoaded) return;
	try {
		dispatch(characterDetailsLoadStarted(character._id));
		const response = await get(`/characters/${character._id}`, token, controller);
		if (response.error) {
			throw new Error(response.error);
		}
		dispatch(characterDetailsLoadSuccess(response.character));
	} catch (error) {
		if (!controller.signal.aborted) {
			dispatch(characterLoadError(error));
		}
	}
};


/**
 * UPDATE CHARACTER ACTIONS
 */


export const updateStarted = ({ type, characterId, data }) => ({
	type: Actions.UPDATE_CHARACTER_START,
	payload: { type, characterId, data },
});

export const updateError = (error) => ({
	type: Actions.UPDATE_CHARACTER_ERROR,
	payload: error.message,
});

export const updateSuccess = () => ({
	type: Actions.UPDATE_CHARACTER_SUCCESS,
});

const getParam = (type, data) => {
	const numeric = [
		'experience',
		'maxHp',
		'currentHp',
		'gold',
		'silver',
		'copper',
		'dexterity',
		'strength',
		'constitution',
		'wisdom',
		'intelligence',
		'charisma',
		'level',
	];

	if (numeric.includes(type)) {
		return {
			localParam: Number(data),
			updateParam: Number(data),
		};
	}

	if (type === 'equipment') {
		return {
			localParam: { quantity: 1, item: data },
			updateParam: [{ quantity: 1, item: data._id }],
		};
	}

	return {
		updateParam: [data._id],
		localParam: data,
	};
};

export const update = ({ type, characterId, data }, controller) => async (dispatch, getState) => {
	const { token } = getState().auth;
	// the backend just needs an id, but locally we want the whole object.
	const { updateParam, localParam } = getParam(type, data);

	try {
		dispatch(updateStarted({ type, characterId, data: localParam }));
		const result = await put(`/characters/${characterId}`, { [type]: updateParam }, controller, token);
		if (result.error) throw new Error(result.error);
		dispatch(updateSuccess());
	} catch (error) {
		if (!controller.signal.aborted) {
			dispatch(updateError(error));
		}
	}
};
