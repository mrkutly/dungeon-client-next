const Weapon = ({ data }) => {
	const { item, quantity } = data;

	const {
		name,
		weight,
		category_range,
		cost,
		damage: {
			damage_dice,
			damage_bonus,
			damage_type,
		},
		range,
		properties,
		throw_range,
	} = item;

	return (
		<>
			<h2>{name}</h2>
			<p><strong>Quantity:</strong> {quantity}</p>
			<p>Weight (each): {weight}</p>
			<p>Cost (each): {cost.quantity}{cost.unit}</p>
			<p>Weapon type: {category_range}</p>
			{damage_dice && <p>Damage roll: {damage_dice}</p>}
			{typeof damage_bonus === 'number' && <p>Damage bonus: {damage_bonus}</p>}
			{damage_type && <p>Damage type: {damage_type.name}</p>}
			{range?.normal && <p>Normal Range: {range.normal}</p>}
			{range?.long && <p>Long Range: {range.long}</p>}
			{throw_range?.normal && <p>Short Throw Range: {throw_range.normal}</p>}
			{throw_range?.long && <p>Long Throw Range: {throw_range.long}</p>}

			{properties.length > 0 ? (
				<>
					<p>Properties:</p>
					<ul>
						{properties.map((p) => <li key={p.name}>{p.name}</li>)}
					</ul>
				</>
			) : null}

		</>
	);
};

export default Weapon;
