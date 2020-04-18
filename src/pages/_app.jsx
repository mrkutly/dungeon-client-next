import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../redux/store';
import MobileWrapper from '../components/MobileWrapper';
import '../../public/styles.css';

const App = ({ Component, pageProps, store }) => (
	<>
		<Head>
			<title>Dungeon Friend</title>
			<meta name="description" content="A simple character sheet manager for D&D 5e." />
		</Head>
		<Provider store={store}>
			<MobileWrapper />
			<Component {...pageProps} />
		</Provider>
	</>
);

App.getInitialProps = async function getInitialProps({ Component, ctx }) {
	const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
	return { pageProps };
};

export default withRedux(initializeStore)(App);
