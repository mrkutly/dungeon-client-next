import Link from 'next/link';
import { useSelector } from 'react-redux';
import HomeLayout from './layouts/HomeLayout';
import useCharacters from '../hooks/useCharacters';
import Characters from './Characters';

const UserHome = () => {
	const name = useSelector((s) => s.auth.user?.name);
	const { data, error } = useCharacters();

	return (
		<HomeLayout>
			{error && <h1>{error}</h1>}
			{
				data && (
					<>
						<h1>Hello {name}</h1>
						{data.length === 0 ? (
							<p><Link href="/characters/new"><a>Go here</a></Link> to create your fist character.</p>
						) : <Characters />}
					</>
				)
			}
		</HomeLayout>
	);
};

export default UserHome;
