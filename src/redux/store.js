import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialState from './initialState';
import reducer from './reducers';

export const initializeStore = (preloadedState = initialState) => createStore(
	reducer,
	preloadedState,
	composeWithDevTools(applyMiddleware(thunk)),
);
