import { useSelector } from 'react-redux';
import HomeLayout from './layouts/HomeLayout';
import useLocalCharacters from '../hooks/useLocalCharacters';

const UserHome = () => {
	const { data, loading, error } = useSelector((s) => s.characters);
	useLocalCharacters();

	return (
		<HomeLayout>
			{loading && <h1>loading...</h1>}
			{error && <h1>{error}</h1>}
			{
				data && (
					<>
						<h1>My Characters</h1>
						<pre>{JSON.stringify(data, null, 2)}</pre>
					</>
				)
			}
		</HomeLayout>
	);
};

export default UserHome;
