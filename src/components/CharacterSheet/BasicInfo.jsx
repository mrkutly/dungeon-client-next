/* eslint-disable react/destructuring-assignment */
import styled from 'styled-components';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

const Display = ({
	maxHp, currentHp, experience, gold, silver, copper,
}) => (
	<InfoStyles id="hp-and-experience">
		<div>
			HP {currentHp} / {maxHp}
		</div>
		<div>
			EXP {experience}
		</div>
		<div>
			Gold {gold}
		</div>
		<div>
			Silver {silver}
		</div>
		<div>
			Copper {copper}
		</div>
	</InfoStyles>
);

const Edit = ({
	maxHp, currentHp, experience, gold, silver, copper,
}) => {
	// const dispatch = useDispatch();
	const [data, setData] = useState({
		currentHp,
		maxHp,
		experience,
		gold,
		silver,
		copper,
	});

	const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

	return (
		<InfoStyles id="hp-and-experience">
			<div>
				HP
				<input
					type="number"
					aria-label="current-hp"
					name="currentHp"
					value={data.currentHp}
					onChange={handleChange}
					size="3"
				/>
				/
				<input
					type="number"
					aria-label="max-hp"
					name="maxHp"
					value={data.maxHp}
					onChange={handleChange}
					size={3}
				/>

			</div>
			<div>
				EXP
				<input
					type="number"
					aria-label="experience"
					name="experience"
					value={data.experience}
					onChange={handleChange}
				/>
			</div>
			<div>
				Gold
				<input
					type="number"
					aria-label="gold"
					name="gold"
					value={data.gold}
					onChange={handleChange}
				/>
			</div>
			<div>
				Silver
				<input
					type="number"
					aria-label="silver"
					name="silver"
					value={data.silver}
					onChange={handleChange}
				/>
			</div>
			<div>
				Copper
				<input
					type="number"
					aria-label="copper"
					name="copper"
					value={data.copper}
					onChange={handleChange}
				/>
			</div>
		</InfoStyles>
	);
};

const BasicInfo = (props) => {
	if (!props.editMode) return <Display {...props} />;
	return <Edit {...props} />;
};

const InfoStyles = styled.section`
	font-size: 1.5rem;
	border-top: var(--one-width) solid var(--highlight-2);
	grid-column: 2 / span 2;
	
	div {
		display: inline-block;
		margin-right: 4rem;
	}

	input {
		max-width: 7rem;
		margin-right: var(--one-space);
	}
`;

export default BasicInfo;
