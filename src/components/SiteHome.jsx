import Link from 'next/link';
import { useSelector } from 'react-redux';
import Centered from './layouts/Centered';
import useLocalToken from '../hooks/useLocalToken';

const Home = () => {
	const { token, checkedLocal } = useSelector(({ auth }) => auth);
	useLocalToken();

	return (
		<Centered>
			<h1>Dungeon Friend</h1>
			<p>Hi. Thanks for coming to Dungeon friend. We'll help you manage your character sheets.</p>
			{checkedLocal && !token
				? (
					<>
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
					</>
				)
				:	null}
			{checkedLocal && token ? <Link href="/home"><a>Go to my stuff.</a></Link> : null}
		</Centered>
	);
};


export default Home;
