const Feature = ({ data }) => {
	const {
		desc, name, level, class: _class,
	} = data;
	return (
		<>
			<h2>{name}</h2>
			<p>Class: {_class.name}</p>
			<p>Level {level}</p>
			{desc.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
		</>
	);
};

export default Feature;
