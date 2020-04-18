import fetch from 'isomorphic-unfetch';

const baseUrl = process.env.NODE_ENV === 'development'
	? 'http://localhost:8888'
	: 'https://dungeon-api-express.herokuapp.com';

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

export const post = async (endpoint, data, controller, token) => {
	const url = baseUrl + endpoint;
	const opts = {};

	if (controller || typeof AbortController !== 'undefined') {
		opts.signal = controller.signal || new AbortController().signal;
	}

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			...headers,
			Authorization: token,
		},
		body: JSON.stringify(data),
		...opts,
	});
	return response.json();
};

export const put = async (endpoint, data, controller, token) => {
	const url = baseUrl + endpoint;
	const opts = {};

	if (controller || typeof AbortController !== 'undefined') {
		opts.signal = controller.signal || new AbortController().signal;
	}

	const response = await fetch(url, {
		method: 'PUT',
		headers: {
			...headers,
			Authorization: token,
		},
		body: JSON.stringify(data),
		...opts,
	});
	return response.json();
};

export const del = async (endpoint, controller, token) => {
	const url = baseUrl + endpoint;
	const opts = {};

	if (controller || typeof AbortController !== 'undefined') {
		opts.signal = controller.signal || new AbortController().signal;
	}

	const response = await fetch(url, {
		method: 'DELETE',
		headers: {
			...headers,
			Authorization: token,
		},
		...opts,
	});
	return response.json();
};

export const get = async (endpoint, token = '', controller) => {
	const url = baseUrl + endpoint;
	const opts = {};

	if (controller || typeof AbortController !== 'undefined') {
		opts.signal = controller.signal || new AbortController().signal;
	}
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			...headers,
			authorization: token,
		},
		...opts,
	});
	return response.json();
};
