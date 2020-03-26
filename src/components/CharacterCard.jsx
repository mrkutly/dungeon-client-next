import styled from 'styled-components';
import Link from 'next/link';

const CharacterCard = ({ character }) => {
	const {
		name, level, _id,
	} = character;
	const race = character.race.name;
	const characterClass = character.characterClass.name;

	return (
		<Link href={`/characters/${_id}`}>
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
