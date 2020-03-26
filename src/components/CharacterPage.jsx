import { useRouter } from 'next/router';
import useCharacter from '../hooks/useCharacter';
import HomeLayout from './layouts/HomeLayout';
import CharacterSheet from './CharacterSheet';

const CharacterPage = () => {
	const router = useRouter();
	const id = router.query.id;
	const { character, error, loading } = useCharacter(id);

	return (
		<HomeLayout>
			{loading && <h1>loading...</h1>}
			{error && <h1>{error}</h1>}
			{character?.detailsLoaded && <CharacterSheet character={character} />}
		</HomeLayout>
	);
};
export default CharacterPage;
