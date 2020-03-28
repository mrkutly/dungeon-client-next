import { combineReducers } from 'redux';
import authReducer from './auth';
import charactersReducer from './characters';
import searchReducer from './search';
import newReducer from './new';

export default combineReducers({
	auth: authReducer,
	characters: charactersReducer,
	search: searchReducer,
	new: newReducer,
});
