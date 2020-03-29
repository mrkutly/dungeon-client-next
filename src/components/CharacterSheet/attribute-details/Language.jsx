import joinIntoSentence from '../../../lib/joinIntoSentence';

const Language = ({ data }) => {
	const {
		name,
		type,
		typical_speakers,
		script,
	} = data;

	return (
		<>
			<h2>{name}</h2>
			<p>Type: {type}</p>
			<p>Script: {script}</p>
			{typical_speakers.length > 0 && <p>Typical Speakers: {joinIntoSentence(typical_speakers)}</p>}
		</>
	);
};

export default Language;
