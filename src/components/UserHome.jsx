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
						<h1>My Characters</h1>
						<Characters />
					</>
				)
			}
		</HomeLayout>
	);
};

export default UserHome;
