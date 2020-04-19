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

App.getStaticProps = async function getStaticProps({ Component, ctx }) {
	const pageProps = Component.getStaticProps ? await Component.getStaticProps(ctx) : {};
	return { pageProps };
};

App.getServerSideProps = async function getServerSideProps({ Component, ctx }) {
	const pageProps = Component.getServerSideProps ? await Component.getServerSideProps(ctx) : {};
	return { pageProps };
};

export default withRedux(initializeStore)(App);
