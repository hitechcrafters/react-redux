describe('React redux app e2e tests', () => {
  it('Enter localhost and check default values', () => {
    cy.visit('/');

    cy.get('.counter h1').should('have.text', '0');
    cy.get('.list input').should('have.value', '');
  })

  it('Click + and increment counter', () => {
    cy.get('.counter button:first').click().click();

    cy.get('.counter h1').should('have.text', '2');
  });

  it('Click - and decrement counter', () => {
    cy.get('.counter button:last').click();

    cy.get('.counter h1').contains('1');
  });

  it('Add user to list', () => {
    cy.get('.list input').type('Marcin');
    cy.get('.list button').contains('Add').click();

    cy.get('.list ul').contains('Marcin');
  })

  it('Remove user from list', () => {
    cy.get('.list button:last').click();

    cy.get('.list ul').contains('Marcin').should('not.exist');
  })
});