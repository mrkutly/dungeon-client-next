const Armor = ({ data }) => {
	const { item } = data;
	const {
		name, armor_category, armor_class, stealth_disadvantage, str_minimum, weight, cost,
	} = item;
	return (
		<>
			<h2>{name}</h2>
			<p>{armor_category} Armor</p>
			<p>Armor Class: {armor_class.base}</p>
			<p>Weight: {weight}</p>
			<p>Cost: {cost.quantity}{cost.unit}</p>
			{armor_class.dex_bonus && <p>Dexterity Bonus</p>}
			{stealth_disadvantage && <p>Stealth disatvantage</p>}
			{str_minimum > 0 && <p>Minimum strength: {str_minimum}</p>}
		</>
	);
};

export default Armor;
