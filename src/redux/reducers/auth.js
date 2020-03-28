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
				checkedLocal: true,
				error: null,
				user: action.payload.user,
				token: action.payload.token,
			};

		case Actions.SIGNIN_ERROR:
			return {
				...state,
				loading: false,
				token: null,
				user: {
					name: null,
					email: null,
				},
				error: action.payload,
			};

		case Actions.LOCAL_SIGNIN_FAILED:
			return {
				...state,
				checkedLocal: true,
			};

		case Actions.SIGNOUT:
			return initialState.auth;

		default:
			return state;
	}
}
