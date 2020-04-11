describe('New Character Page', () => {
	it('Redirects you to the sign in page if not logged in', () => {
		cy.visit('/characters/new');
	});

	it('Lets you log in', () => {
		const { email, password } = Cypress.env();
		cy.get('input[name="email"]').clear().type(email);
		cy.get('input[name="password"]').clear().type(password);
		cy.get('button[type="submit"]').click();
		cy.location('pathname').should('eq', '/characters');
		cy.get('a[href="/characters/new"]').click();
	});

	it('Has a name input', () => {
		cy.get('input[name="name"]').clear().type('Brub');
	});

	it('Has a selection of races', () => {
		cy.get('fieldset[id="races-fieldset"]');
		cy.get('label[for="Half-Orc"]').click();
	});

	it('Has a selection of classes', () => {
		cy.get('fieldset[id="classes-fieldset"]');
		cy.get('label[for="Rogue"]').click();
	});

	it('Has a selection of attributes', () => {
		cy.get('fieldset[id="attributes-fieldset"]');
		cy.get('input[name="level"]').type(3);
		cy.get('input[name="dexterity"]').type(17);
		cy.get('input[name="strength"]').type(14);
		cy.get('input[name="constitution"]').type(12);
		cy.get('input[name="wisdom"]').type(11);
		cy.get('input[name="intelligence"]').type(16);
		cy.get('input[name="charisma"]').type(8);
	});

	it('Requires a name', () => {
		cy.get('input[name="name"]').clear();
		cy.get('button[type="submit"').click();
		cy.get('h2[id="error"]');
		cy.location('pathname').should('eq', '/characters/new');
		cy.get('input[name="name"]').type('Brub');
	});

	it('Lets you create a new character', () => {
		cy.get('button[type="submit"').click();
		cy.location('pathname').should('eq', '/characters');
		cy.contains('Brub').should('exist');
	});
});
