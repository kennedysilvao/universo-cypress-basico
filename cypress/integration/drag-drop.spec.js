
describe('Drag And Drop', () => {

    before(() => {
        cy.visit('/drag_and_drop');
    })

    it('Deve arrastar o cypress para a caixinha do node', () => {
        const dataTransfer = new DataTransfer();

        cy.get('img[alt=Cypress]')
            .trigger('dragstart', { dataTransfer });

        cy.get('.nodejs figure[draggable=true]')
            .trigger('drop', { dataTransfer });
    })

    it('Deve arrastar o robot para a caixinha do python', () => {

        const dataTransfer = new DataTransfer();

        cy.get("img[alt='Robot Framework']")
            .trigger('dragstart', { dataTransfer });

        cy.get('.python figure[draggable=true]')
            .trigger('drop', { dataTransfer });
    })

})
