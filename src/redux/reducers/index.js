import { combineReducers } from 'redux';
import rootReducer from './root';
import authReducer from './auth';
import charactersReducer from './characters';
import searchReducer from './search';
import newReducer from './new';

const sliceReducer = combineReducers({
	auth: authReducer,
	characters: charactersReducer,
	search: searchReducer,
	new: newReducer,
});

export default (state, action) => {
	const intermediateState = sliceReducer(state, action);
	const finalState = rootReducer(intermediateState, action);
	return finalState;
};
