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

export const signinSuccess = ({ token, user }) => ({
	type: Actions.SIGNIN_SUCCESS,
	payload: { token, user },
});

export const localSignInFailed = () => ({
	type: Actions.LOCAL_SIGNIN_FAILED,
});

export const signin = (email, password, controller) => async (dispatch) => {
	try {
		dispatch(signinStarted());
		const result = await post('/login', { email, password }, controller);
		if (result.error) throw new Error(result.error);
		dispatch(signinSuccess({ user: result.user, token: result.token }));
		localStorage.setItem('dungeonUser', JSON.stringify(result));
		Router.push('/characters');
	} catch (error) {
		if (!controller.signal.aborted) {
			dispatch(signinError(error));
		}
	}
};

export const signup = (name, email, password, confirmPassword, controller) => async (dispatch) => {
	try {
		dispatch(signinStarted());
		const result = await post('/signup', {
			name, email, password, confirmPassword,
		}, controller);
		if (result.error) throw new Error(result.error);
		dispatch(signinSuccess(result.token));
		localStorage.setItem('authToken', result.token);
		Router.push('/characters');
	} catch (error) {
		if (!controller.signal.aborted) {
			dispatch(signinError(error));
		}
	}
};
