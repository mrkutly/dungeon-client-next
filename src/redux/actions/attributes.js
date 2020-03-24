import * as Actions from '../actionTypes';
import { get } from '../../lib/fetches';
import attributeTypes from '../attributeTypes';

/**
 * ATTRIBUTES ACTIONS
 */

export const attributeLoadStarted = () => ({
	type: Actions.ATTRIBUTE_LOAD_STARTED,
});

export const attributeLoadError = (error) => ({
	type: Actions.ATTRIBUTE_LOAD_ERROR,
	payload: error.message,
});

export const attributeLoadSuccess = (payloadType, id, attributeDetails) => {
	if (!Object.values(attributeTypes).includes(payloadType)) {
		throw new Error('Invalid payload type in attributeLoadSuccess action');
	}

	return ({
		type: Actions.ATTRIBUTE_LOAD_SUCCESS,
		payload: attributeDetails,
		id,
		payloadType,
	});
};

export const loadAttribute = (type, id, controller) => async (dispatch) => {
	try {
		dispatch(attributeLoadStarted());
		const result = await get(`/${type}/${id}`, null, controller);
		if (result.error) {
			throw new Error(result.error);
		}
		dispatch(attributeLoadSuccess(type, id, result.data));
	} catch (error) {
		if (!controller.signal.aborted) {
			dispatch(attributeLoadError(error));
		}
	}
};
