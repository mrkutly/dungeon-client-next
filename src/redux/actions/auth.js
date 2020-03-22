import Router from 'next/router';
import * as Actions from '../actionTypes';
import { post } from '../../lib/fetches';

/**
 * SIGN IN ACTIONS
 */

export const signinStarted = () => ({
	type: Actions.SIGNIN_STARTED,
});

export const signinError = (error) => ({
	type: Actions.SIGNIN_ERROR,
	payload: error.message,
});

export const signinSuccess = (token) => ({
	type: Actions.SIGNIN_SUCCESS,
	payload: token,
});

export const localSignInFailed = () => ({
	type: Actions.LOCAL_SIGNIN_FAILED,
});

export const signin = (email, password) => async (dispatch) => {
	try {
		dispatch(signinStarted());
		const result = await post('/login', { email, password });
		if (result.error) throw new Error(result.error);
		dispatch(signinSuccess(result.token));
		localStorage.setItem('authToken', result.token);
		Router.push('/home');
	} catch (error) {
		dispatch(signinError(error));
	}
};

export const signup = (email, password) => async (dispatch) => {
	try {
		dispatch(signinStarted());
		const result = await post('/signup', { email, password });
		if (result.error) throw new Error(result.error);
		dispatch(signinSuccess(result.token));
		localStorage.setItem('authToken', result.token);
		Router.push('/home');
	} catch (error) {
		dispatch(signinError(error));
	}
};
