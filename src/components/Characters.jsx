import styled from 'styled-components';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';

const Characters = () => {
	const {
		error,
		data: characters,
	} = useSelector((s) => s.characters);

	if (error) return <h1>{error}</h1>;
	if (!characters) return null;

	return (
		<>
			<CharacterListStyles>
				{characters.map((c) => <li key={c._id}><CharacterCard character={c} /></li>)}
			</CharacterListStyles>
			<Link href="/characters/new"><a>Make a new character</a></Link>
		</>
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
