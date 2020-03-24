import styled from 'styled-components';
import joinIntoSentence from '../../lib/joinIntoSentence';

const BasicInfo = ({ character }) => {
	const {
		max_hp, current_hp, experience, languages, conditions,
	} = character;

	const languageNames = languages && languages.length ? languages.map((l) => l.name) : null;
	const conditionNames = conditions && conditions.length ? conditions.map((c) => c.name) : null;

	return (
		<InfoStyles id="hp-and-experience">
			<span>
				HP {current_hp} / {max_hp}
			</span>
			<span>
				EXP {experience}
			</span>

			{languageNames && (
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
