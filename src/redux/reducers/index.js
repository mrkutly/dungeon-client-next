import { combineReducers } from 'redux';
import authReducer from './auth';
import charactersReducer from './characters';
import attributesReducer from './attributes';

export default combineReducers({
	auth: authReducer,
	characters: charactersReducer,
	attributes: attributesReducer,
});
