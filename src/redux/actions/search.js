import * as Actions from '../actionTypes';
import { get } from '../../lib/fetches';
import attributeTypes from '../attributeTypes';

/**
 * ATTRIBUTES ACTIONS
 */

export const searchStarted = (type, query) => ({
	type: Actions.SEARCH_STARTED,
	payload: { type, query },
});

export const searchError = (error, type) => ({
	type: Actions.SEARCH_ERROR,
	payload: { error, type },
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

export const search = (type, query, controller) => async (dispatch, getState) => {
	// if the search query contains any previously searched queries,
	// we already have all the data we need in state.
	const state = getState();
	const resultIsCached = state.search.queries[type].some((q) => query.includes(q));

	if (resultIsCached) {
		return dispatch(searchSuccess(type, {}));
	}

	try {
		dispatch(searchStarted(type, query.toLowerCase()));

		const result = await get(`/${type}?name=${query}`, null, controller);
		if (result.error) {
			throw new Error(result.error);
		}
		const data = {};
		result.data.forEach((d) => { data[d.index] = d; });
		dispatch(searchSuccess(type, data));
	} catch (error) {
		if (!controller.signal.aborted) {
			dispatch(searchError(error.message, type));
		}
	}
};
