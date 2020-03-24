const Skill = ({ data }) => {
	const {
		desc, name, ability_score,
	} = data;
	return (
		<>
			<h2>{name}</h2>
			<p>Ability Score: {ability_score.name}</p>
			{desc.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
		</>
	);
};

export default Skill;
