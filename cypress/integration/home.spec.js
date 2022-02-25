

it('Deve exibir a home page', function () {
    // Visitar um endereço HTTP
    cy.visit('/');

    // Verificar se o titulo é igual
    cy.title()
        .should('eq', 'Training Wheels | QAninja');

    // Verificar lista
    cy.get('ul[class=menu-list]')
        .should('be.visible');
})