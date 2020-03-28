import initialState from '../initialState';
import * as Actions from '../actionTypes';

export default function reducer(state = initialState.search, action) {
	switch (action.type) {
		case Actions.SEARCH_STARTED:
			return {
				...state,
				loading: true,
				error: null,
				queries: [
					...state.queries,
					action.payload,
				],
			};

		case Actions.SEARCH_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				[action.payload.type]: {
					...state[action.payload.type],
					...action.payload.data,
				},
			};

		case Actions.SEARCH_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
}
