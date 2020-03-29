export default {
	auth: {
		token: null,
		loading: false,
		error: null,
		checkedLocal: false,
		user: null,
	},
	characters: {
		fetched: false,
		loading: false,
		data: [],
		prevData: null,
		error: null,
	},
	search: {
		features: {
			loading: false,
			error: null,
			data: [],
			cache: {},
		},
		skills: {
			loading: false,
			error: null,
			data: [],
			cache: {},
		},
		proficiencies: {
			loading: false,
			error: null,
			data: [],
			cache: {},
		},
		spells: {
			loading: false,
			error: null,
			data: [],
			cache: {},
		},
		equipment: {
			loading: false,
			error: null,
			data: [],
			cache: {},
		},
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
