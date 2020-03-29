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
				fetched: true,
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
			action.payload.detailsLoaded = true;

			return {
				...state,
				loading: false,
				data: {
					...state.data,
					[action.payload._id]: action.payload,
				},
			};
		}

		case Actions.ADD_CHARACTER:
			return {
				...state,
				data: {
					...state.data,
					[action.payload._id]: action.payload,
				},
			};

		case Actions.UPDATE_CHARACTER_START: {
			const characters = state.data;
			const { type, characterId, data } = action.payload;
			const updatedData = typeof characters[characterId][type] === 'object'
				? [...characters[characterId][type], data]
				: [data];

			return {
				...state,
				prevData: state.data,
				data: {
					...state.data,
					[characterId]: {
						...state.data[characterId],
						[type]: updatedData,
					},
				},
				loading: true,
				error: null,
			};
		}

		case Actions.NUMERIC_UPDATE_START: {
			const { characterId, updates } = action.payload;
			return {
				...state,
				prevData: state.data,
				loading: true,
				error: null,
				data: {
					...state.data,
					[characterId]: {
						...state.data[characterId],
						...updates,
					},
				},
			};
		}

		case Actions.UPDATE_CHARACTER_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
			};

		case Actions.UPDATE_EQUIPMENT_SUCCESS: {
			const { equipment, characterId } = action.payload;
			return {
				...state,
				loading: false,
				error: null,
				data: {
					...state.data,
					[characterId]: {
						...state.data[characterId],
						equipment,
					},
				},
			};
		}

		case Actions.UPDATE_CHARACTER_ERROR:
			return {
				...state,
				prevData: null,
				data: state.prevData,
				loading: false,
				error: action.payload,
			};

		case Actions.REMOVE_ATTRIBUTE_START: {
			const { characterId, type, attributeId } = action.payload;
			const character = state.data[characterId];
			const updated = character[type].filter((a) => a._id !== attributeId);

			return {
				...state,
				prevData: state.data,
				loading: true,
				error: null,
				data: {
					...state.data,
					[characterId]: {
						...state.data[characterId],
						[type]: updated,
					},
				},
			};
		}


		case Actions.UPDATE_EQUIPMENT_QUANTITY_START: {
			const { characterId, equipmentId, quantity } = action.payload;
			const { equipment } = state.data[characterId];
			const idx = equipment.findIndex((e) => e._id === equipmentId);
			equipment[idx].quantity = quantity;

			return {
				...state,
				prevData: state.data,
				loading: true,
				error: null,
				data: {
					...state.data,
					[characterId]: {
						...state.data[characterId],
						equipment,
					},
				},
			};
		}

		default:
			return state;
	}
}
