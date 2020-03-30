import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import useEdit from '../../hooks/useEdit';
import { updateStats } from '../../redux/actions/characters';


const Heading = ({ character, editMode, setEditMode }) => {
	const { level } = character;
	const race = character.race.name;
	const characterClass = character.characterClass.name;
	const { edits, levelUp } = useEdit();
	const dispatch = useDispatch();

	const save = () => {
		const characterId = Router.query.id;
		dispatch(updateStats({ characterId, updates: edits }));
		setEditMode(false);
	};

	const handleClick = editMode ? save : () => setEditMode(true);

	return (
		<HeadingStyles>
			<span>
				<h1>
					{character.name}
				</h1>
				<h2>
					Level
					{' '}
					{editMode ? edits.level : level}
					{' '}
					{race}
					{' '}
					{characterClass}
				</h2>
			</span>
			<div>
				{editMode && <button type="button" onClick={levelUp}>Level Up</button>}
				<button type="button" onClick={handleClick}>{editMode ? 'Done' : 'Edit'}</button>
			</div>
		</HeadingStyles>
	);
};

const HeadingStyles = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: baseline;

	button {
		margin-left: var(--one-space);
	}
	
	h1, h2 {
		display: inline-block;
		margin-right: calc(var(--one-space) * 2);
	}
`;

export default Heading;
