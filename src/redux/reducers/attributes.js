import initialState from '../initialState';
import * as Actions from '../actionTypes';

export default function reducer(state = initialState.attributes, action) {
	switch (action.type) {
		case Actions.ATTRIBUTE_LOAD_STARTED:
			return {
				...state,
				loading: true,
				error: null,
			};

		case Actions.ATTRIBUTE_LOAD_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				[action.payloadType]: {
					...state[action.payloadType],
					[action.id]: action.payload,
				},
			};

		case Actions.ATTRIBUTE_LOAD_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
}
