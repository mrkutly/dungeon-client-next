import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';
import CharacterSheet from './CharacterSheet';

const Characters = () => {
	const {
		error,
		activeId,
		data: characters,
	} = useSelector((s) => s.characters);
	const { token } = useSelector((s) => s.auth);

	if (!characters) return null;
	if (error) return <h1>{error}</h1>;
	if (activeId) {
		const active = characters.find((c) => c.id === activeId);
		return <CharacterSheet character={active} />;
	}

	return (
		<CharacterListStyles>
			{characters.map((c) => <li key={c.id}><CharacterCard character={c} token={token} /></li>)}
		</CharacterListStyles>
	);
};

const CharacterListStyles = styled.ul`
	margin: 0 auto;
	list-style: none;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding-left: 0;
	max-width: calc(var(--one-space) * 100);

	li {
		display: inline-block;
		width: calc(var(--one-space) * 20);
		margin: 0 calc(var(--one-space) * 2.5);
	}
`;

export default Characters;
