import joinIntoSentence from '../../../lib/joinIntoSentence';

const Trait = ({ data }) => {
	const {
		races,
		subraces,
		name,
		desc,
	} = data;

	const raceNames = joinIntoSentence(races.map((r) => r.name));
	const subraceNames = joinIntoSentence(subraces.map((s) => s.name));
	return (
		<>
			<h2>{name}</h2>
			{races.length > 0 && <p>Races: {raceNames}</p>}
			{subraces.length > 0 && <p>Subraces: {subraceNames}</p>}
			{desc.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
		</>
	);
};

export default Trait;
