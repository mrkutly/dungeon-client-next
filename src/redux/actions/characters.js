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

		// turn the array into an object for faster reads and updates
		const characters = {};
		result.characters.forEach((char) => {
			characters[char._id] = char;
		});
		dispatch(characterLoadSuccess(characters));
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

export const numericUpdateStarted = ({ characterId, updates }) => ({
	type: Actions.NUMERIC_UPDATE_START,
	payload: { characterId, updates },
});

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

// This action will update relational data, like spells or equipment
export const update = ({ type, characterId, data }, controller) => async (dispatch, getState) => {
	try {
		const { token } = getState().auth;
		// the backend just needs an id, but locally we want the whole object.
		const { updateParam, localParam } = getParam(type, data);

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

// This action updates basic numeric stats like HP, EXP, or Gold
export const updateStats = ({ characterId, updates }, controller) => async (dispatch, getState) => {
	try {
		const { token } = getState().auth;
		dispatch(numericUpdateStarted({ characterId, updates }));
		const result = await put(`/characters/${characterId}`, updates, controller, token);
		if (result.error) throw new Error(result.error);
		dispatch(updateSuccess());
	} catch (error) {
		if (!controller.signal.aborted) {
			dispatch(updateError(error));
		}
	}
};
