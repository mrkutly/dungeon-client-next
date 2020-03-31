const Feat = ({ data }) => {
	const { name, desc, prerequisite } = data;
	return (
		<>
			<h2>{name}</h2>
			<p>Prerequisite: {prerequisite}</p>
			{desc.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
		</>
	);
};

export default Feat;
