import { useState } from 'react';
import styled from 'styled-components';
import { Provider } from '../../hooks/useEdit';
import { mobileBreakpoint } from '../styleConfig';
import Header from './Header';
import Stats from './Stats';
import BasicInfo from './BasicInfo';
import SectionsList from './SectionsList';

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
					<SectionsList character={character} editMode={editMode} />
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

	@media (${mobileBreakpoint}) {
		display: block;
	}
`;

export default CharacterSheet;
