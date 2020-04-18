import Link from 'next/link';

const CharacterCard = ({ character }) => {
	const {
		name, level, _id,
	} = character;
	const race = character.race.name;
	const characterClass = character.characterClass.name;

	return (
		<Link href="/characters/[id]" as={`/characters/${_id}`}>
			<a>
				<h2>
					{name}
				</h2>
				<span>
					Lvl
					{' '}
					{level}
					{' '}
					{race}
					{' '}
					{characterClass}
				</span>
			</a>
		</Link>
	);
};

export default CharacterCard;
