import Router from 'next/router';
import * as Actions from '../actionTypes';
import { get, post } from '../../lib/fetches';
import { addCharacter } from './characters';

/**
 * NEW CHARACTER OPTIONS ACTIONS
 */

export const optionsLoadStarted = () => ({
	type: Actions.OPTIONS_LOAD_STARTED,
});

export const optionsLoadError = (error) => ({
	type: Actions.OPTIONS_LOAD_ERROR,
	payload: error.message,
});

export const optionsLoadSuccess = ({ races, classes }) => ({
	type: Actions.OPTIONS_LOAD_SUCCESS,
	payload: { races, classes },
});

export const loadOptions = (controllerOne, controllerTwo) => async (dispatch) => {
	try {
		dispatch(optionsLoadStarted());
		const raceResult = await get('/races', null, controllerOne);
		const classResult = await get('/classes', null, controllerTwo);
		if (raceResult.error || classResult.error) {
			const message = `Errors: ${raceResult.error} \n ${classResult.error}`;
			throw new Error(message);
		}
		const sort = (arr) => arr.sort((a, b) => (a.name < b.name ? -1 : 0));
		dispatch(optionsLoadSuccess({ races: sort(raceResult.data), classes: sort(classResult.data) }));
	} catch (error) {
		const aborted = controllerOne.signal.aborted || controllerTwo.signal.aborted;
		if (!aborted) {
			dispatch(optionsLoadError(error));
		}
	}
};

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
