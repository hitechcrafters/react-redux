describe('React redux app e2e tests', () => {
  it('Enter main page and check default values', () => {
    cy.visit('/');

    cy.get('label').first().contains('Login');
    cy.get('label').last().contains('Pass');
  });

  it('Click submit with empty fields', () => {
    cy.get('button').click();

    cy.location().should(loc => expect(loc.pathname).to.eq('/'));
  });

  it('Click submit with wrong credentials', () => {
    cy.get('input[name="login"]').type('darq');
    cy.get('input[name="pass"]').type('darqooo');
    cy.get('button').click();

    cy.location().should(loc => expect(loc.pathname).to.eq('/'));
  });

  it('Click submit and login', () => {
    cy.visit('/');

    cy.get('input[name="login"]').type('darq');
    cy.get('input[name="pass"]').type('darq');
    cy.get('button').click();

    cy.location().should(loc => expect(loc.pathname).to.eq('/dashboard'));
  });
  it('Enter dashboard and check default values', () => {
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
  });

  it('Remove user from list', () => {
    cy.get('.list button:last').click();

    cy.get('.list ul').contains('Marcin').should('not.exist');
  });

  it('Fill form and get redirected', () => {
    cy.get('input[name="firstName"]').type('Jolanta');
    cy.get('input[name="lastName"]').type('Braciak');
    cy.get('input[name="email"]').type('jolbrac@wp.pl');
    cy.get('button').contains('Submit').click();

    cy.location().should(loc => expect(loc.pathname).to.eq('/test'));
    cy.get('button').contains('Back').click();
    cy.location().should(loc => expect(loc.pathname).to.eq('/dashboard'));
  });
});