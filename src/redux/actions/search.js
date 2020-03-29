import * as Actions from '../actionTypes';
import { get } from '../../lib/fetches';
import attributeTypes from '../attributeTypes';

/**
 * SEARCH ACTIONS
 */

export const searchLoadStarted = (type) => ({
	type: Actions.SEARCH_LOAD_STARTED,
	payload: { type },
});

export const searchLoadError = (error, type) => ({
	type: Actions.SEARCH_LOAD_ERROR,
	payload: { error, type },
});

export const searchLoadSuccess = (type, data) => {
	if (!Object.values(attributeTypes).includes(type)) {
		throw new Error('Invalid payload type in searchSuccess action');
	}

	return ({
		type: Actions.SEARCH_LOAD_SUCCESS,
		payload: { type, data },
	});
};

export const cacheResult = ({ type, query, result }) => ({
	type: Actions.CACHE_RESULT,
	payload: { type, query, result },
});

export const loadData = (type, controller) => async (dispatch) => {
	try {
		dispatch(searchLoadStarted(type));

		const result = await get(`/${type}`, null, controller);
		if (result.error) {
			throw new Error(result.error);
		}

		dispatch(searchLoadSuccess(type, result.data));
	} catch (error) {
		if (!controller.signal.aborted) {
			dispatch(searchLoadError(error.message, type));
		}
	}
};
