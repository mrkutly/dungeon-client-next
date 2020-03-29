import { createContext, useContext, useState } from 'react';

export const EditContext = createContext();

export const Provider = ({ character, children }) => {
	const [edits, setEdits] = useState({
		dexterity: character.dexterity,
		strength: character.strength,
		constitution: character.constitution,
		wisdom: character.wisdom,
		intelligence: character.intelligence,
		charisma: character.charisma,
		maxHp: character.maxHp,
		currentHp: character.currentHp,
		experience: character.experience,
		gold: character.gold,
		silver: character.silver,
		copper: character.copper,
	});

	const handleEdit = (e) => {
		setEdits({
			...edits,
			[e.target.name]: Number(e.target.value),
		});
	};


	return (
		<EditContext.Provider value={
			{
				edits,
				handleEdit,
			}
		}
		>{children}
		</EditContext.Provider>
	);
};

export default function useEdit() {
	return useContext(EditContext);
}
