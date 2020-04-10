import initialState from '../initialState';
import * as Actions from '../actionTypes';

export default function reducer(state = initialState.isMobile, action) {
	switch (action.type) {
		case Actions.SET_MOBILE_TRUE:
			return true;

		default:
			return state;
	}
}
