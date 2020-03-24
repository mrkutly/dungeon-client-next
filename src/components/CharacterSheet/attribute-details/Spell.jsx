import joinIntoSentence from '../../../lib/joinIntoSentence';

const Spell = ({ data }) => {
	const {
		name,
		school,
		level,
		desc,
		range,
		ritual,
		concentration,
		components,
		duration,
		classes,
		subclasses,
		casting_time,
	} = data;

	const classNames = classes && classes.map((c) => c.name);
	const subclassNames = subclasses && subclasses.map((s) => s.name);
	const componentNames = components.map((c) => {
		if (c === 'V') return 'Verbal';
		if (c === 'M') return 'Material';
		if (c === 'S') return 'Somatic';
		return null;
	});

	return (
		<>
			<h2>{name}</h2>
			{school && school.name && <p>Magic School: {school.name}</p>}
			<p>Level: {level}</p>
			<p>Range: {range}</p>
			<p>Duration: {duration}</p>
			<p>Type: {ritual ? 'Ritual' : 'Cantrip'}</p>
			{concentration && <p>Concentration required</p>}
			<p>Components: {joinIntoSentence(componentNames)}</p>
			<p>Casting time: {casting_time}</p>
			{classes.length > 0 && (
				<p>Classes: {joinIntoSentence(classNames)}</p>
			)}
			{subclasses.length > 0 && (
				<p>Subclasses: {joinIntoSentence(subclassNames)}</p>
			)}
			{desc.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
		</>
	);
};

export default Spell;
