const Weapon = ({ data }) => {
	const { item, quantity } = data;

	const {
		name,
		weight,
		category_range,
		cost,
		damage,
		range,
		properties,
		throw_range,
	} = item;
	const twoHanded = item['2h_damage'];

	return (
		<>
			<h2>{name}</h2>
			<p><strong>Quantity:</strong> {quantity}</p>
			<p>Weight (each): {weight}</p>
			<p>Cost (each): {cost.quantity}{cost.unit}</p>
			<p>Weapon type: {category_range}</p>
			<h3>Damage</h3>
			<p>{damage.damage_dice} | {damage.damage_type.name}</p>
			<p>Bonus: {damage.damage_bonus > 0 ? damage.damage_bonus : 'none'}</p>
			{twoHanded && (
				<>
					<h4>Two-Handed Damage</h4>
					<p>{twoHanded.damage_dice} | {twoHanded.damage_type.name}</p>
					<p>Bonus: {twoHanded.damage_bonus > 0 ? twoHanded.damage_bonus : 'none'}</p>
				</>
			)}

			<h3>Range</h3>
			{range?.normal && <p>Normal Range: {range.normal}ft.</p>}
			{range?.long && <p>Long Range: {range.long}ft.</p>}
			{throw_range?.normal && <p>Short Throw Range: {throw_range.normal}ft.</p>}
			{throw_range?.long && <p>Long Throw Range: {throw_range.long}ft.</p>}

			{properties.length > 0 ? (
				<>
					<h3>Properties:</h3>
					<ul>
						{properties.map((p) => <li key={p.name}>{p.name}</li>)}
					</ul>
				</>
			) : null}

		</>
	);
};

export default Weapon;
