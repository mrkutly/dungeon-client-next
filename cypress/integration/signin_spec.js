describe('Signin Page', () => {
	it('Visits the signin page', () => {
		cy.visit('/signin');
	});

	it('Fails with bad credentials', () => {
		cy.get('input[name="email"]').type('bad-creds-asndflk@test.com');
		cy.get('input[name="password"]').type('alksndfn!@#123');
		cy.get('button[type="submit"]').click();
		cy.contains('Incorrect login credentials');
	});

	it('Logs you in with good credentials', () => {
		const { email, password } = Cypress.env();
		cy.get('input[name="email"]').clear().type(email);
		cy.get('input[name="password"]').clear().type(password);
		cy.get('button[type="submit"]').click();
		cy.location('pathname').should('eq', '/characters');
	});
});
