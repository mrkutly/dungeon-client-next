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

		case Actions.CHARACTER_DETAILS_LOAD_STARTED:
			return {
				...state,
				loading: true,
			};

		case Actions.CHARACTER_DETAILS_LOAD_SUCCESS: {
			const data = state.data || [];
			const characters = [...data];
			const characterIndex = characters.findIndex((c) => c._id === action.payload._id);
			action.payload.detailsLoaded = true;
			if (characterIndex >= 0) {
				characters[characterIndex] = action.payload;
			} else {
				characters.push(action.payload);
			}

			return {
				...state,
				loading: false,
				data: characters,
			};
		}

		default:
			return state;
	}
}
