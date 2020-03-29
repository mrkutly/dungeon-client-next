describe('Home Page', () => {
	it('Visits the home page', () => {
		cy.visit('/');
	});
	it('Can go to the signup page', () => {
		cy.get('a[href="/signup"]').should('exist');
	});
	it('Can go to the login page', () => {
		cy.get('a[href="/signin"]').should('exist');
	});
});
