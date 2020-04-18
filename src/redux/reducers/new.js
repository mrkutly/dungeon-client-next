import initialState from '../initialState';
import * as Actions from '../actionTypes';

export default function reducer(state = initialState.new, action) {
	switch (action.type) {
		case Actions.SET_CHARACTER_FIELD:
			return {
				...state,
				character: {
					...state.character,
					[action.payload.field]: action.payload.value,
				},
			};

		case Actions.CHARACTER_SUBMIT_STARTED:
			return {
				...state,
				submitted: true,
				error: null,
			};

		case Actions.CHARACTER_SUBMIT_ERROR:
			return {
				...state,
				submitted: false,
				error: action.payload,
			};


		default:
			return state;
	}
}
