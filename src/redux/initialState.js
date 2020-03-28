export default {
	auth: {
		token: null,
		loading: false,
		error: null,
		checkedLocal: false,
	},
	characters: {
		fetched: false,
		loading: false,
		data: [],
		error: null,
	},
	attributes: {
		loading: false,
		error: null,
		features: {},
		skills: {},
		proficiencies: {},
		spells: {},
		equipment: {},
	},
	new: {
		loading: false,
		error: null,
		submitted: false,
		options: {
			races: [],
			classes: [],
		},
		character: {
			name: '',
			race: null,
			characterClass: null,
			level: 1,
			dexterity: 1,
			strength: 1,
			constitution: 1,
			wisdom: 1,
			intelligence: 1,
			charisma: 1,
		},
	},
};
