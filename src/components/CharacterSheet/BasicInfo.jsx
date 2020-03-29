/* eslint-disable react/destructuring-assignment */
import styled from 'styled-components';
import { useState } from 'react';
import useEdit from '../../hooks/useEdit';

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

const Edit = () => {
	const { edits, handleEdit } = useEdit();
	return (
		<InfoStyles id="hp-and-experience">
			<div>
				HP
				<input
					type="number"
					aria-label="current-hp"
					name="currentHp"
					value={edits.currentHp}
					onChange={handleEdit}
					size="3"
				/>
				/
				<input
					type="number"
					aria-label="max-hp"
					name="maxHp"
					value={edits.maxHp}
					onChange={handleEdit}
					size={3}
				/>

			</div>
			<div>
				EXP
				<input
					type="number"
					aria-label="experience"
					name="experience"
					value={edits.experience}
					onChange={handleEdit}
				/>
			</div>
			<div>
				Gold
				<input
					type="number"
					aria-label="gold"
					name="gold"
					value={edits.gold}
					onChange={handleEdit}
				/>
			</div>
			<div>
				Silver
				<input
					type="number"
					aria-label="silver"
					name="silver"
					value={edits.silver}
					onChange={handleEdit}
				/>
			</div>
			<div>
				Copper
				<input
					type="number"
					aria-label="copper"
					name="copper"
					value={edits.copper}
					onChange={handleEdit}
				/>
			</div>
		</InfoStyles>
	);
};

const BasicInfo = (props) => {
	if (!props.editMode) return <Display {...props} />;
	return <Edit />;
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
