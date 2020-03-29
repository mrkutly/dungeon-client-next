/* eslint-disable react/destructuring-assignment */
import styled from 'styled-components';
import useEdit from '../../hooks/useEdit';

const Edit = () => {
	const { edits, handleEdit } = useEdit();
	return (
		<StatsStyles id="stats">
			<div>CON</div>
			<input
				type="number"
				aria-label="constitution"
				name="constitution"
				value={edits.constitution}
				onChange={handleEdit}
			/>

			<div>STR</div>
			<input
				type="number"
				aria-label="strength"
				name="strength"
				value={edits.strength}
				onChange={handleEdit}
			/>

			<div>DEX</div>
			<input
				type="number"
				aria-label="dexterity"
				name="dexterity"
				value={edits.dexterity}
				onChange={handleEdit}
			/>

			<div>WIS</div>
			<input
				type="number"
				aria-label="wisdom"
				name="wisdom"
				value={edits.wisdom}
				onChange={handleEdit}
			/>

			<div>INT</div>
			<input
				type="number"
				aria-label="intelligence"
				name="intelligence"
				value={edits.intelligence}
				onChange={handleEdit}
			/>

			<div>CHA</div>
			<input
				type="number"
				aria-label="charisma"
				name="charisma"
				value={edits.charisma}
				onChange={handleEdit}
			/>

		</StatsStyles>
	);
};

const Display = (props) => {
	const {
		dexterity,
		strength,
		constitution,
		wisdom,
		intelligence,
		charisma,
	} = props;

	return (
		<StatsStyles id="stats">
			<div>CON</div>
			<div aria-label="consitution">{constitution}</div>
			<div>STR</div>
			<div aria-label="strength">{strength}</div>
			<div>DEX</div>
			<div aria-label="dexterity">{dexterity}</div>
			<div>WIS</div>
			<div aria-label="wisdom">{wisdom}</div>
			<div>INT</div>
			<div aria-label="intelligence">{intelligence}</div>
			<div>CHA</div>
			<div aria-label="charisma">{charisma}</div>
		</StatsStyles>
	);
};

const Stats = (props) => {
	if (!props.editMode) return <Display {...props} />;
	return <Edit />;
};

const StatsStyles = styled.section`
	display: grid;
	grid-row: 1 / span 10;
	font-size: 1.5rem;
	grid-template-columns: repeat(2, 4rem);
	grid-template-rows: repeat(6, 2.5rem);
	border-top: var(--one-width) solid var(--highlight);
	
	div {
		border-bottom: var(--one-width) solid var(--highlight);
	}

	input {
		align-self: end;
		width: 4rem;
		line-height: 2.1rem;
		margin: 0;
		font-size: 1.5rem;
	}
`;

export default Stats;
