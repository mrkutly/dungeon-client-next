import { combineReducers } from 'redux';
import authReducer from './auth';
import charactersReducer from './characters';
import attributesReducer from './attributes';
import newReducer from './new';

export default combineReducers({
	auth: authReducer,
	characters: charactersReducer,
	attributes: attributesReducer,
	new: newReducer,
});
