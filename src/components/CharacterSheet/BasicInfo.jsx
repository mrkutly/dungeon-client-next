import styled from 'styled-components';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

const Display = ({ maxHp, currentHp, experience }) => (
	<InfoStyles id="hp-and-experience">
		<span>
			HP {currentHp} / {maxHp}
		</span>
		<span>
			EXP {experience}
		</span>
	</InfoStyles>
);

const Edit = ({ maxHp, currentHp, experience }) => {
	// const dispatch = useDispatch();
	const [data, setData] = useState({
		currentHp,
		maxHp,
		experience,
	});

	const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

	return (
		<InfoStyles id="hp-and-experience">
			<span>
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

			</span>
			<span>
				EXP
				<input
					type="number"
					aria-label="experience"
					name="experience"
					value={data.experience}
					onChange={handleChange}
				/>
			</span>
		</InfoStyles>
	);
};

const BasicInfo = ({
	maxHp, currentHp, experience, editMode,
}) => {
	if (!editMode) return <Display maxHp={maxHp} currentHp={currentHp} experience={experience} />;
	return <Edit maxHp={maxHp} currentHp={currentHp} experience={experience} />;
};

const InfoStyles = styled.section`
	font-size: 1.5rem;
	border-top: var(--one-width) solid var(--highlight-2);
	grid-column: 2 / span 2;
	
	span {
		margin-right: 2rem;
	}

	div {
		margin-top: calc(var(--one-space) * 3);
	}

	input {
		max-width: 7rem;
		margin-right: var(--one-space);
	}
`;

export default BasicInfo;
