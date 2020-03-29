import styled from 'styled-components';

const Heading = ({ character, editMode, setEditMode }) => {
	const { level } = character;
	const race = character.race.name;
	const characterClass = character.characterClass.name;
	const handleClick = editMode ? () => setEditMode(false) : () => setEditMode(true);
	return (
		<HeadingStyles>
			<span>
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
			</span>
			<button type="button" onClick={handleClick}>{editMode ? 'Done' : 'Edit'}</button>
		</HeadingStyles>
	);
};

const HeadingStyles = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: baseline;
	
	h1, h2 {
		display: inline-block;
		margin-right: calc(var(--one-space) * 2);
	}
`;

export default Heading;
