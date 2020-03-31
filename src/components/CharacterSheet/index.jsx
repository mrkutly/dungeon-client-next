import { useState } from 'react';
import styled from 'styled-components';
import { Provider } from '../../hooks/useEdit';
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
	LANGUAGES,
	CONDITIONS,
	TRAITS,
	FEATS,
} from '../../redux/attributeTypes';

const CharacterSheet = ({ character }) => {
	const [editMode, setEditMode] = useState(false);

	return (
		<>
			<Provider character={character}>
				<Header character={character} editMode={editMode} setEditMode={setEditMode} />
				<SheetStyles>
					<Stats
						dexterity={character.dexterity}
						strength={character.strength}
						constitution={character.constitution}
						wisdom={character.wisdom}
						intelligence={character.intelligence}
						charisma={character.charisma}
						editMode={editMode}
					/>
					<BasicInfo
						maxHp={character.maxHp}
						currentHp={character.currentHp}
						experience={character.experience}
						gold={character.gold}
						silver={character.silver}
						copper={character.copper}
						editMode={editMode}
					/>
					<Section data={character.feats} type={FEATS} editMode={editMode} />
					<Section data={character.features} type={FEATURES} editMode={editMode} />
					<Section data={character.proficiencies} type={PROFICIENCIES} editMode={editMode} />
					<Section data={character.skills} type={SKILLS} editMode={editMode} />
					<Section data={character.traits} type={TRAITS} editMode={editMode} />
					<Section data={character.spells} type={SPELLS} editMode={editMode} />
					<Section data={character.equipment} type={EQUIPMENT} editMode={editMode} />
					<Section data={character.languages} type={LANGUAGES} editMode={editMode} />
					<Section data={character.conditions} type={CONDITIONS} editMode={editMode} />
				</SheetStyles>
			</Provider>
		</>
	);
};

const SheetStyles = styled.div`
	display: grid;
	grid-template-columns: 8rem auto auto;
	grid-template-rows: repeat(10, auto);
	grid-gap: calc(var(--one-space) * 4);
`;

export default CharacterSheet;
