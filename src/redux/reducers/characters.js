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
			const characters = [...state.data];
			const characterIndex = characters.findIndex((c) => c.id === action.payload.id);
			action.payload.detailsLoaded = true;
			characters[characterIndex] = action.payload;

			return {
				...state,
				activeId: action.payload.id,
				loading: false,
				data: characters,
			};
		}

		case Actions.SELECT_CHARACTER: {
			return {
				...state,
				activeId: action.payload,
			};
		}

		default:
			return state;
	}
}
