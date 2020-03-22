import Link from 'next/link';
import Centered from './layouts/Centered';

const Home = () => (
	<Centered>
		<h1>Dungeon Friend</h1>
		<p>Hi. Thanks for coming to Dungeon friend. We'll help you manage your character sheets.</p>
		<p>
			Have an account?
			{' '}
			<Link href="/signin"><a>Sign in here.</a></Link>
			{' '}
		</p>
		<p>
			Want an account?
			{' '}
			<Link href="/signup"><a>Let's get started.</a></Link>
			{' '}
		</p>
	</Centered>
);


export default Home;
