import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { initializeStore } from './store';

let reduxStore;
const getOrInitializeStore = (initialState) => {
	// Always make a new store if server, otherwise state is shared between requests
	if (typeof window === 'undefined') {
		return initializeStore(initialState);
	}

	// Create store if unavailable on the client and set it on the window object
	if (!reduxStore) {
		reduxStore = initializeStore(initialState);
	}

	return reduxStore;
};

const withRedux = (PageComponent, { ssr = true } = {}) => {
	const WithRedux = ({ initialReduxState, ...props }) => {
		const store = getOrInitializeStore(initialReduxState);
		return (
			<Provider store={store}>
				<PageComponent {...props} />
			</Provider>
		);
	};

	// Make sure people don't use this HOC on _app.js level
	if (process.env.NODE_ENV !== 'production') {
		const isAppHoc = PageComponent === App || PageComponent.prototype instanceof App;
		if (isAppHoc) {
			throw new Error('The withRedux HOC only works with PageComponents');
		}
	}

	// Set the correct displayName in development
	if (process.env.NODE_ENV !== 'production') {
		const displayName = PageComponent.displayName || PageComponent.name || 'Component';

		WithRedux.displayName = `withRedux(${displayName})`;
	}

	if (ssr || PageComponent.getServerSideProps) {
		WithRedux.getServerSideProps = async (context) => {
			// Get or Create the store with `undefined` as initialState
			// This allows you to set a custom default initialState
			const store = getOrInitializeStore();

			// Provide the store to getServerSideProps of pages
			context.reduxStore = store;

			// Run getServerSideProps from HOCed PageComponent
			const pageProps = typeof PageComponent.getServerSideProps === 'function'
				? await PageComponent.getServerSideProps(context)
				: {};

			// Pass props to PageComponent
			return {
				...pageProps,
				initialReduxState: store.getState(),
			};
		};
	}

	return WithRedux;
};

export default withRedux;
