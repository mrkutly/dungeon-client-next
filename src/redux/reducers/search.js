import initialState from '../initialState';
import * as Actions from '../actionTypes';

export default function reducer(state = initialState.search, action) {
	switch (action.type) {
		case Actions.SEARCH_LOAD_STARTED:
			return {
				...state,
				[action.payload.type]: {
					...state[action.payload.type],
					loading: false,
					error: null,
				},
			};

		case Actions.SEARCH_LOAD_SUCCESS:
			return {
				...state,
				[action.payload.type]: {
					...state[action.payload.type],
					data: action.payload.data,
					loading: false,
					error: null,
				},
			};

		case Actions.SEARCH_LOAD_ERROR:
			return {
				...state,
				[action.payload.type]: {
					...state[action.payload.type],
					loading: false,
					error: action.payload.error,
				},
			};

		case Actions.CACHE_RESULT:
			return {
				...state,
				[action.payload.type]: {
					...state[action.payload.type],
					cache: {
						...state[action.payload.type].cache,
						[action.payload.query]: action.payload.result,
					},
				},
			};

		default:
			return state;
	}
}
