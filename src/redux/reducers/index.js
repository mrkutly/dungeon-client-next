import { combineReducers } from 'redux';
import authReducer from './auth';
import charactersReducer from './characters';

export default combineReducers({ auth: authReducer, characters: charactersReducer });
