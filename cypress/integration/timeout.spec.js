

it('exemplo de timeout', () => {
    cy.visit('/timeout');

    cy.contains('button', 'Habilita').click();

    // cy.wait(7000);
    

    cy.get('#firstname')
        .should('be.visible')
        .type('Kennedy', {timeout: 7000});
})