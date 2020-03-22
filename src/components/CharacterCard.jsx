import styled from 'styled-components';
import Link from 'next/link';

const CharacterCard = ({ character }) => {
	const {
		name, level, id,
	} = character;
	const race = character.race.name;
	const characterClass = character.character_class.name;

	return (
		<Link href={`/characters/${id}`}>
			<CardStyles>
				<h2>
					{name}
				</h2>
				<span>
					Lvl
					{' '}
					{level}
					{' '}
					{race}
					{' '}
					{characterClass}
				</span>
			</CardStyles>
		</Link>
	);
};

const CardStyles = styled.a`
	display: block;
	margin: calc(var(--one-space) * 5) 0;
	
	span {
		margin-left: calc(var(--one-space) * 3)
	}
`;
export default CharacterCard;
