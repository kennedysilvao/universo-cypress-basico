
it('deve exibir uma mensagem de alerta', () => {
    cy.visit('/javascript_alerts');


    cy.contains('button', 'Alerta').click();

    cy.on('window:alert', (result) => {
        expect(result).to.equal('Isto é uma mensagem de alerta')
    })
})

it('deve confirmar a solicitação', () => {
    cy.visit('/javascript_alerts');


    cy.contains('button', 'Confirma').click();

    cy.on('window:confirm', () => true);

    cy.get('#result').should('have.text', 'Mensagem confirmada');
})

it('deve cancelar a solicitação', () => {
    cy.visit('/javascript_alerts');

    cy.contains('button', 'Confirma').click();

    cy.on('window:confirm', () => false);

    cy.get('#result').should('have.text', 'Mensagem não confirmada');
})

it('deve exibir mensagem de boas vindas com o meu nome', () => {
    cy.visit('/javascript_alerts');

    cy.window().then(($win) => {
        cy.stub($win, 'prompt').returns('Kennedy')
        cy.contains('button', 'Prompt').click();
    })

    cy.get('#result').should('have.text', 'Olá, Kennedy');
})