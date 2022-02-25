

it('deve fazer o upload da minha foto', () => {
    cy.visit('/upload');

    const imageFile = 'cypress/fixtures/knnd.jpg';

    cy.get('input[name=file]').selectFile(imageFile, {force: true});

    cy.get('input[value=Upload]').click();

    cy.get('img[src="/uploads/knnd.jpg"]', {timeout: 7000})
        .should('be.visible');
})