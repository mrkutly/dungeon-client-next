import styled from 'styled-components';
import Header from './Header';
import Stats from './Stats';
import BasicInfo from './BasicInfo';
import Section from './Section';

const CharacterSheet = ({ character }) => (
	<>
		<Header character={character} />
		<SheetStyles>
			<Stats character={character} />
			<BasicInfo character={character} />
			{character.features && <Section data={character.features} name="Features" />}
			{character.proficiencies && <Section data={character.proficiencies} name="Proficiencies" />}
			{character.skills && <Section data={character.skills} name="Skills" />}
			{character.spells && <Section data={character.spells} name="Spells" />}
			{character.equipment && <Section data={character.equipment} name="Equipment" />}
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
