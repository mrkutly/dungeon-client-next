import initialState from '../initialState';
import * as Actions from '../actionTypes';

export default function reducer(state = initialState.auth, action) {
	switch (action.type) {
		case Actions.SIGNIN_STARTED:
			return {
				...state,
				loading: true,
				error: null,
			};

		case Actions.SIGNIN_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				token: action.payload,
			};

		case Actions.SIGNIN_ERROR:
			return {
				...state,
				loading: false,
				token: null,
				error: action.payload,
			};

		default:
			return state;
	}
}
