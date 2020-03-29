import initialState from '../initialState';
import * as Actions from '../actionTypes';

export default function reducer(state = initialState.search, action) {
	switch (action.type) {
		case Actions.SEARCH_STARTED:
			return {
				...state,
				queries: {
					...state.queries,
					[action.payload.type]: [
						...state.queries[action.payload.type],
						action.payload.query,
					],
				},
				[action.payload.type]: {
					...state[action.payload.type],
					loading: false,
					error: null,
				},
			};

		case Actions.SEARCH_SUCCESS:
			return {
				...state,
				[action.payload.type]: {
					...state[action.payload.type],
					data: {
						...state[action.payload.type].data,
						...action.payload.data,
					},
					loading: false,
					error: null,
				},
			};

		case Actions.SEARCH_ERROR:
			return {
				...state,
				[action.payload.type]: {
					...state[action.payload.type],
					loading: false,
					error: action.payload.error,
				},
			};

		default:
			return state;
	}
}
