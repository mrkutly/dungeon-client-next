import styled from 'styled-components';

const Heading = ({ character }) => {
	const { level } = character;
	const race = character.race.name;
	const characterClass = character.characterClass.name;
	return (
		<HeadingStyles>
			<h1>
				{character.name}
			</h1>
			<h2>
				Level
				{' '}
				{level}
				{' '}
				{race}
				{' '}
				{characterClass}
			</h2>
		</HeadingStyles>
	);
};

const HeadingStyles = styled.header`
	h1, h2 {
		display: inline-block;
		margin-right: calc(var(--one-space) * 2);
	}
`;

export default Heading;
