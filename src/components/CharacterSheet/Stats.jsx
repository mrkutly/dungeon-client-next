import styled from 'styled-components';

const Stats = (props) => {
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
`;

export default Stats;
