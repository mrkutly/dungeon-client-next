import joinIntoSentence from '../../../lib/joinIntoSentence';

const Proficiency = ({ data }) => {
	const {
		type, name, classes, races,
	} = data;

	const classNames = classes && classes.map((c) => c.name);
	const raceNames = races && races.map((r) => r.name);

	return (
		<>
			<h2>{name}</h2>
			<p>Type: {type}</p>
			{classes.length > 0 && (
				<p>Classes: {joinIntoSentence(classNames)}</p>
			)}
			{races.length > 0 && (
				<p>Races: {joinIntoSentence(raceNames)}</p>
			)}
		</>
	);
};

export default Proficiency;
