import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setMobileTrue } from '../redux/actions/mobile';
import withRedux from '../redux/withRedux';
import '../../public/styles.css';

const App = ({ Component, pageProps }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (window.innerWidth <= 600) {
			dispatch(setMobileTrue());
		}
	}, []);

	return (
		<>
			<Head>
				<title>Dungeon Friend</title>
				<meta name="description" content="A simple character sheet manager for D&D 5e." />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default withRedux(App);
