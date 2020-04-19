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

const attributeNames = [
	'feats',
	'features',
	'proficiencies',
	'skills',
	'traits',
	'spells',
	'equipment',
	'languages',
	'conditions',
];

const attributesAllEmpty = (char) => attributeNames.every((attr) => char[attr].length === 0);

const SectionsList = ({ character, editMode }) => {
	if (attributesAllEmpty(character) && !editMode) {
		return <p>Click Edit to start adding stuff to {character.name}'s sheet.</p>;
	}

	return (
		<>
			<Section data={character.feats} type={FEATS} editMode={editMode} />
			<Section data={character.features} type={FEATURES} editMode={editMode} />
			<Section data={character.proficiencies} type={PROFICIENCIES} editMode={editMode} />
			<Section data={character.skills} type={SKILLS} editMode={editMode} />
			<Section data={character.traits} type={TRAITS} editMode={editMode} />
			<Section data={character.spells} type={SPELLS} editMode={editMode} />
			<Section data={character.equipment} type={EQUIPMENT} editMode={editMode} />
			<Section data={character.languages} type={LANGUAGES} editMode={editMode} />
			<Section data={character.conditions} type={CONDITIONS} editMode={editMode} />
		</>
	);
};

export default SectionsList;
