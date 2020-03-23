const baseUrl = process.env.NODE_ENV === 'development'
	? 'http://localhost:3000/api/v1'
	: 'https://dungeon-api-staging.herokuapp.com/api/v1';

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

export const post = async (endpoint, data, controller = new AbortController()) => {
	const url = baseUrl + endpoint;
	const response = await fetch(url, {
		method: 'POST',
		headers,
		body: JSON.stringify(data),
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
