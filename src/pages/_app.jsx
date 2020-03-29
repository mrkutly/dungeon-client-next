import Head from 'next/head';
import '../../public/styles.css';

const App = ({ Component, pageProps }) => (
	<>
		<Head>
			<title>Dungeon Friend</title>
			<meta name="description" content="A simple character sheet manager for D&D 5e." />
		</Head>
		<Component {...pageProps} />
	</>
);

export default App;
