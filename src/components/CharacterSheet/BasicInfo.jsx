import styled from 'styled-components';

const joinIntoSentence = (arr) => {
	if (arr.length === 1) return arr[0];
	const last = arr.pop();
	let joined = arr.join(', ');
	return `${joined}, and ${last}`;
};

const BasicInfo = ({ character }) => {
	const {
		max_hp, current_hp, experience, languages, conditions,
	} = character;

	const languageNames = languages && languages.map((l) => l.name);
	const conditionNames = conditions && conditions.map((c) => c.name);

	return (
		<InfoStyles id="hp-and-experience">
			<span>
				HP {current_hp} / {max_hp}
			</span>
			<span>
				EXP {experience}
			</span>

			{languages && (
				<div>
					Speaks {joinIntoSentence(languageNames)}.
				</div>
			)}
			{conditionNames && (
				<div>
					Currently {joinIntoSentence(conditionNames)}.
				</div>
			)}

		</InfoStyles>
	);
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
`;

export default BasicInfo;
