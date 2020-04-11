const parseLevel = (text) => {
	const level = text.match(/[0-9]+/);
	return Number(level);
};

describe('Character Sheet Page', () => {
	it('Redirects you to the sign in page if not logged in', () => {
		cy.visit('/characters');
	});

	it('Lets you log in', () => {
		const { email, password } = Cypress.env();
		cy.get('input[name="email"]').clear().type(email);
		cy.get('input[name="password"]').clear().type(password);
		cy.get('button[type="submit"]').click();
		cy.location('pathname').should('eq', '/characters');
	});

	it('Can get to a character sheet from the user home page', () => {
		cy.get('li a').first().click();
		cy.location('pathname').should('match', /\/characters\/[\w+]/i);
	});

	it("Displays the character's basic info", () => {
		cy.contains('Brub');
		cy.contains('Level 3 Half-Orc Rogue');
	});

	it("Displays the character's stats", () => {
		cy.get('[aria-label="constitution"]');
		cy.get('[aria-label="strength"]');
		cy.get('[aria-label="dexterity"]');
		cy.get('[aria-label="wisdom"]');
		cy.get('[aria-label="intelligence"]');
		cy.get('[aria-label="charisma"]');
		cy.get('[id="hp-and-experience"]');
	});

	it("Displays the character's attributes", () => {
		cy.get('section[id="feats"]');
		cy.get('section[id="features"]');
		cy.get('section[id="proficiencies"]');
		cy.get('section[id="skills"]');
		cy.get('section[id="traits"]');
		cy.get('section[id="spells"]');
		cy.get('section[id="equipment"]');
		cy.get('section[id="languages"]');
		cy.get('section[id="conditions"]');
	});

	it('Can go into edit mode', () => {
		cy.get('button').contains('Edit').click();
		cy.get('button').contains('Done');
	});

	it("Can edit the character's level", () => {
		cy.get('header span').invoke('text').then((text1) => {
			const level1 = parseLevel(text1);
			cy.get('button[aria-label="level up"]').click().click();

			cy.get('header span').invoke('text').then((text2) => {
				const level2 = parseLevel(text2);
				expect(level2).to.eq(level1 + 2);
				cy.get('button[aria-label="level down"]').click();

				cy.get('header span').invoke('text').then((text3) => {
					const level3 = parseLevel(text3);
					expect(level3).to.eq(level2 - 1);
				});
			});
		});
	});
});
