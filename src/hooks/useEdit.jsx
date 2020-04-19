import { createContext, useContext, useState } from 'react';

export const EditContext = createContext();

export const Provider = ({ character, children }) => {
	const [isEdited, setIsEdited] = useState(false);
	const [edits, setEdits] = useState({
		level: character.level,
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

	const limited = [
		'level',
		'dexterity',
		'strength',
		'constitution',
		'wisdom',
		'intelligence',
		'charisma',
	];

	const validate = ({ name, value }) => {
		value = Number(value);
		if (value < 0) return false;
		if (limited.includes(name) && value > 20) return false;
		if (name === 'currentHp' && value > edits.maxHp) return false;
		return true;
	};

	const levelUp = () => {
		if (edits.level === 20) return;
		if (!isEdited) setIsEdited(true);
		setEdits({
			...edits,
			level: edits.level + 1,
		});
	};

	const levelDown = () => {
		if (edits.level === 1) return;
		if (!isEdited) setIsEdited(true);
		setEdits({
			...edits,
			level: edits.level - 1,
		});
	};

	const handleEdit = (e) => {
		const isValid = validate(e.target);
		if (!isValid) return;
		if (!isEdited) setIsEdited(true);
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
				levelUp,
				levelDown,
				isEdited,
			}
		}
		>{children}
		</EditContext.Provider>
	);
};

export default function useEdit() {
	return useContext(EditContext);
}
