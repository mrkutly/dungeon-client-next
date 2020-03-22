import styled from 'styled-components';

const Stats = ({ character }) => {
	const {
		dexterity,
		strength,
		constitution,
		wisdom,
		intelligence,
		charisma,
	} = character;

	return (
		<StatsStyles>
			<div>CON</div>
			<div>{constitution}</div>
			<div>STR</div>
			<div>{strength}</div>
			<div>DEX</div>
			<div>{dexterity}</div>
			<div>WIS</div>
			<div>{wisdom}</div>
			<div>INT</div>
			<div>{intelligence}</div>
			<div>CHA</div>
			<div>{charisma}</div>
		</StatsStyles>
	);
};

const StatsStyles = styled.div`
	display: grid;
	font-size: 1.5rem;
	grid-template-columns: repeat(2, 4rem);
	grid-template-rows: repeat(10, 3rem);
`;

export default Stats;
