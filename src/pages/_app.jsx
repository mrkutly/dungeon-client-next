import Head from 'next/head';
import '../../public/styles.css';

const App = ({ Component, pageProps }) => (
	<>
		<Head>
			<title>Dungeon Friend</title>
		</Head>
		<Component {...pageProps} />
	</>
);

export default App;
