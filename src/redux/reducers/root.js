import initialState from '../initialState';
import * as Actions from '../actionTypes';

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Actions.SIGNOUT:
			return initialState;

		default:
			return state;
	}
}
