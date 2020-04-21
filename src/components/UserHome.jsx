import Link from 'next/link';
import HomeLayout from './layouts/HomeLayout';
import useCharacters from '../hooks/useCharacters';
import Characters from './Characters';

const UserHome = () => {
	const { data, error } = useCharacters();

	return (
		<HomeLayout>
			{error && <h1>{error}</h1>}
			{
				data && (
					<>
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
