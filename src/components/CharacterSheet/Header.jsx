import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import useEdit from '../../hooks/useEdit';
import { updateStats } from '../../redux/actions/characters';
import { mobileBreakpoint } from '../styleConfig';


const Heading = ({ character, editMode, setEditMode }) => {
	const { level } = character;
	const race = character.race.name;
	const characterClass = character.characterClass.name;
	const {
		edits, levelUp, levelDown, isEdited,
	} = useEdit();
	const dispatch = useDispatch();

	const save = () => {
		if (isEdited) {
			const characterId = Router.query.id;
			dispatch(updateStats({ characterId, updates: edits }, new AbortController()));
		}

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
					{editMode && (
						<button
							type="button"
							onClick={levelDown}
							aria-label="level down"
							disabled={edits.level === 1}
							className="level-btn"
						><span role="img" aria-label="finger pointing down">👇</span>
						</button>
					)}
					{editMode ? edits.level : level}
					{editMode && (
						<button
							type="button"
							onClick={levelUp}
							aria-label="level up"
							disabled={edits.level === 20}
							className="level-btn"
						><span role="img" aria-label="finger pointing up">👆</span>
						</button>
					)}
					{' '}
					{race}
					{' '}
					{characterClass}
				</h2>
			</span>
			<div>
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
	margin-top: calc(var(--one-space) * 8);
	margin-bottom: calc(var(--one-space) * 4);

	button.level-btn {
		border: none;
		margin: 0.25rem var(--one-space);
	}

	button {
		margin-left: var(--one-space);
	}
	
	h1, h2 {
		display: inline-block;
		margin-right: calc(var(--one-space) * 2);
	}

	@media (${mobileBreakpoint}) {
		display: block;
	}
`;

export default Heading;
