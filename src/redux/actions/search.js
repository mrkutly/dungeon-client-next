import * as Actions from '../actionTypes';
import { get } from '../../lib/fetches';
import attributeTypes from '../attributeTypes';

/**
 * ATTRIBUTES ACTIONS
 */

export const searchStarted = (query) => ({
	type: Actions.SEARCH_STARTED,
	payload: query,
});

export const searchError = (error) => ({
	type: Actions.SEARCH_ERROR,
	payload: error.message,
});

export const searchSuccess = (type, data) => {
	if (!Object.values(attributeTypes).includes(type)) {
		throw new Error('Invalid payload type in searchSuccess action');
	}

	return ({
		type: Actions.SEARCH_SUCCESS,
		payload: { type, data },
	});
};

export const loadAttribute = (type, query, controller) => async (dispatch, getState) => {
	// if the search query contains any previously searched queries,
	// we already have all the data we need in state.
	const state = getState();
	const resultIsCached = state.search.queries.some((q) => query.includes(q));

	if (resultIsCached) {
		return dispatch(searchSuccess(type, {}));
	}

	try {
		dispatch(searchStarted(query));

		const result = await get(`/${type}?query=${query}`, null, controller);
		if (result.error) {
			throw new Error(result.error);
		}
		dispatch(searchSuccess(type, result.data));
	} catch (error) {
		if (!controller.signal.aborted) {
			dispatch(searchError(error));
		}
	}
};
