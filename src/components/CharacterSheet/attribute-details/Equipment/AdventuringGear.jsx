const AdventuringGear = ({ data }) => {
	const { item } = data;
	const {
		name, gear_category, cost, weight, desc,
	} = item;

	return (
		<>
			<h2>{name}</h2>
			<p>Category: {gear_category}</p>
			<p>Cost: {cost.quantity}{cost.unit}</p>
			<p>Weight: {weight}</p>
			{desc && desc.map((d) => <p key={d}>{d}</p>)}
		</>
	);
};

export default AdventuringGear;
