const Condition = ({ data }) => {
	const { name, desc } = data;

	return (
		<>
			<h2>{name}</h2>
			{desc.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
		</>
	);
};

export default Condition;
