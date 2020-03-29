const baseUrl = process.env.NODE_ENV === 'development'
	? 'http://localhost:8888'
	: 'https://dungeon-api-staging.herokuapp.com/api/v1';

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

export const post = async (endpoint, data, controller = new AbortController(), token) => {
	const url = baseUrl + endpoint;
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			...headers,
			Authorization: token,
		},
		body: JSON.stringify(data),
		signal: controller.signal,
	});
	return response.json();
};

export const put = async (endpoint, data, controller = new AbortController(), token) => {
	const url = baseUrl + endpoint;
	const response = await fetch(url, {
		method: 'PUT',
		headers: {
			...headers,
			Authorization: token,
		},
		body: JSON.stringify(data),
		signal: controller.signal,
	});
	return response.json();
};

export const del = async (endpoint, controller = new AbortController(), token) => {
	const url = baseUrl + endpoint;
	const response = await fetch(url, {
		method: 'DELETE',
		headers: {
			...headers,
			Authorization: token,
		},
		signal: controller.signal,
	});
	return response.json();
};

export const get = async (endpoint, token = '', controller = new AbortController()) => {
	const url = baseUrl + endpoint;
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			...headers,
			authorization: token,
		},
		signal: controller.signal,
	});
	return response.json();
};
