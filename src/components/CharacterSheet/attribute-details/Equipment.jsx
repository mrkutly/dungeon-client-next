// import joinIntoSentence from '../../../lib/joinIntoSentence';

// TODO: make different modals for different types of equipment

const Proficiency = ({ data }) => {
	const {
		type, name, classes, races,
	} = data;
	console.log(data);
	// const classNames = classes && classes.map((c) => c.name);
	// const raceNames = races && races.map((r) => r.name);

	return (
		<>
			<h2>{name}</h2>
			{/* <p>Type: {type}</p>
			{classes.length > 0 && (
				<p>Classes: {joinIntoSentence(classNames)}</p>
			)}
			{races.length > 0 && (
				<p>Races: {joinIntoSentence(raceNames)}</p>
			)} */}
		</>
	);
};

export default Proficiency;

// ? weapon example
// _id: "5e5fe5500b1bb138c5bea98b"
// index: "sickle"
// name: "Sickle"
// equipment_category: "Weapon"
// weapon_category: "Simple"
// weapon_range: "Melee"
// category_range: "Simple Melee"
// cost: {quantity: 1, unit: "gp"}
// damage:
// damage_dice: "1d4"
// damage_bonus: 0
// damage_type: {url: "/api/damage-types/slashing", name: "Slashing"}
// __proto__: Object
// range: {normal: 5, long: null}
// weight: 2
// properties: Array(2)
// 0: {url: "/api/weapon-properties/light", name: "Light"}
// 1: {url: "/api/weapon-properties/monk", name: "Monk"}
// length: 2

// ? pouch
// _id: "5e5fe5500b1bb138c5beaa03"
// index: "pouch"
// name: "Pouch"
// equipment_category: "Adventuring Gear"
// gear_category: "Standard Gear"
// cost: {quantity: 5, unit: "sp"}
// weight: 1
// desc: ["A cloth or leather pouch can hold up to 20 sling b…ponent pouch (described earlier in this section)."]
// url: "/api/equipment/pouch"
