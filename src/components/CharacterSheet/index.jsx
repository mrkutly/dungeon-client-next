import styled from 'styled-components';
import Header from './Header';
import Stats from './Stats';
import BasicInfo from './BasicInfo';
import Section from './Section';
import {
	FEATURES,
	PROFICIENCIES,
	SKILLS,
	SPELLS,
	EQUIPMENT,
} from './attributeTypes';

const CharacterSheet = ({ character }) => (
	<>
		<Header character={character} />
		<SheetStyles>
			<Stats character={character} />
			<BasicInfo character={character} />
			{character.features && <Section data={character.features} type={FEATURES} />}
			{character.proficiencies && <Section data={character.proficiencies} type={PROFICIENCIES} />}
			{character.skills && <Section data={character.skills} type={SKILLS} />}
			{character.spells && <Section data={character.spells} type={SPELLS} />}
			{character.equipment && <Section data={character.equipment} type={EQUIPMENT} />}
		</SheetStyles>
	</>
);

const SheetStyles = styled.div`
	display: grid;
	grid-template-columns: 8rem auto auto;
	grid-template-rows: repeat(10, auto);
	grid-gap: calc(var(--one-space) * 4);
`;

export default CharacterSheet;
