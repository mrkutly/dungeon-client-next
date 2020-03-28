import initialState from '../initialState';
import * as Actions from '../actionTypes';

export default function reducer(state = initialState.new, action) {
	switch (action.type) {
		case Actions.OPTIONS_LOAD_STARTED:
			return {
				...state,
				loading: true,
				error: null,
			};

		case Actions.OPTIONS_LOAD_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				options: {
					races: action.payload.races,
					classes: action.payload.classes,
				},
				character: {
					race: action.payload.races[0],
					characterClass: action.payload.classes[0],
				},
			};

		case Actions.OPTIONS_LOAD_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

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
