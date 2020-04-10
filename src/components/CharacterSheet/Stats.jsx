/* eslint-disable react/destructuring-assignment */
import styled from 'styled-components';
import useEdit from '../../hooks/useEdit';
import { mobileBreakpoint } from '../styleConfig';

const stats = [
	{ displayName: 'CON', name: 'constitution' },
	{ displayName: 'STR', name: 'strength' },
	{ displayName: 'DEX', name: 'dexterity' },
	{ displayName: 'WIS', name: 'wisdom' },
	{ displayName: 'INT', name: 'intelligence' },
	{ displayName: 'CHA', name: 'charisma' },
];

const Edit = () => {
	const { edits, handleEdit } = useEdit();
	return (
		<StatsStyles id="stats">
			{stats.map((stat) => (
				<>
					<div>{stat.displayName}</div>
					<input
						type="number"
						pattern="[0-9]*"
						aria-label={stat.name}
						name={stat.name}
						value={edits[stat.name]}
						onChange={handleEdit}
					/>
				</>
			))}
		</StatsStyles>
	);
};

const Display = (props) => (
	<StatsStyles id="stats">
		{stats.map((stat) => (
			<>
				<div>{stat.displayName}</div>
				<div aria-label={stat.name}>{props[stat.name]}</div>
			</>
		))}
	</StatsStyles>
);

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

	@media (${mobileBreakpoint}) {
		max-width: 10rem;
		grid-template-columns: 50% 50%;
		margin: var(--one-space) 0;
	}
`;

export default Stats;
