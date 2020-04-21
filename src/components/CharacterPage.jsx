import { useRouter } from 'next/router';
import useCharacter from '../hooks/useCharacter';
import HomeLayout from './layouts/HomeLayout';
import CharacterSheet from './CharacterSheet';

const CharacterPage = () => {
	const router = useRouter();
	const { id } = router.query;
	if (!id) {
		router.push('/characters');
		return null;
	}
	const { character, error, loading } = useCharacter(id);

	return (
		<HomeLayout>
			{(loading && !character?.detailsLoaded) && <h1>loading...</h1>}
			{character?.detailsLoaded && <CharacterSheet character={character} />}
			{error && <h1>{error}</h1>}
		</HomeLayout>
	);
};
export default CharacterPage;
