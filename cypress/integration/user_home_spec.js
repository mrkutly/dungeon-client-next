describe('User Home Page', () => {
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

	it('Has a link to sign out', () => {
		cy.get('a[href="/"]');
	});

	it('Has a link to the new character page', () => {
		cy.get('a[href="/characters/new"]');
	});

	it('Has a list of characters', () => {
		cy.get('ul');
	});
});
