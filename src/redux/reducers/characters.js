import initialState from '../initialState';
import * as Actions from '../actionTypes';

export default function reducer(state = initialState.characters, action) {
	switch (action.type) {
		case Actions.CHARACTER_LOAD_STARTED:
			return {
				...state,
				loading: true,
				error: null,
			};

		case Actions.CHARACTER_LOAD_SUCCESS:
			return {
				...state,
				loading: false,
				checkedLocal: true,
				error: null,
				data: action.payload,
			};

		case Actions.CHARACTER_LOAD_ERROR:
			return {
				...state,
				loading: false,
				data: null,
				error: action.payload,
			};

		case Actions.LOCAL_CHARACTER_LOAD_FAILED:
			return {
				...state,
				checkedLocal: true,
			};

		default:
			return state;
	}
}
