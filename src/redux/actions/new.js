import Router from 'next/router';
import * as Actions from '../actionTypes';
import { post } from '../../lib/fetches';
import { addCharacter } from './characters';

/*
	CHARACTER FORM ACTIONS
*/

export const setField = ({ field, value }) => ({
	type: Actions.SET_CHARACTER_FIELD,
	payload: { field, value },
});

export const submitStarted = () => ({
	type: Actions.CHARACTER_SUBMIT_STARTED,
});

export const submitFailed = (message) => ({
	type: Actions.CHARACTER_SUBMIT_ERROR,
	payload: message,
});

export const submitForm = (controller) => async (dispatch, getState) => {
	try {
		dispatch(submitStarted());
		const state = getState();
		const { token } = state.auth;
		const { character } = state.new;

		const result = await post('/characters', character, controller, token);

		if (result.error || result.errors) {
			let message = result.error;
			if (!message) {
				message = result.errors.map((e) => e.msg).join('. ');
			}
			throw new Error(message);
		}

		const newChar = {
			...character,
			_id: result.character._id,
		};

		dispatch(addCharacter(newChar));
		Router.push('/characters');
	} catch (error) {
		if (!controller.signal.aborted) {
			dispatch(submitFailed(error.message));
		}
	}
};
