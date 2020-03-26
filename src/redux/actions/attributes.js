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

export const attributeLoadSuccess = (payloadType, _id, attributeDetails) => {
	if (!Object.values(attributeTypes).includes(payloadType)) {
		throw new Error('Invalid payload type in attributeLoadSuccess action');
	}

	return ({
		type: Actions.ATTRIBUTE_LOAD_SUCCESS,
		payload: attributeDetails,
		_id,
		payloadType,
	});
};

export const loadAttribute = (type, _id, controller) => async (dispatch) => {
	try {
		dispatch(attributeLoadStarted());
		const result = await get(`/${type}/${_id}`, null, controller);
		if (result.error) {
			throw new Error(result.error);
		}
		dispatch(attributeLoadSuccess(type, _id, result.data));
	} catch (error) {
		if (!controller.signal.aborted) {
			dispatch(attributeLoadError(error));
		}
	}
};
