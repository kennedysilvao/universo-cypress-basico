

it('deve exibir 7 séries no total', () => {
    cy.visit('/tables');

    cy.get('table tbody tr')
        .then((series) => {
            expect(series).to.have.length(7);
        });
})

it('deve exibir a série loki', () => {
    cy.visit('/tables');

    cy.contains('table tbody tr', 'Loki')
        .then((item) => {
            expect(item).to.contain('Marvel')
            expect(item).to.contain('Disney+')
            expect(item).to.contain('2021')
        })
})

it('deve remover a série round 6', () => {
    cy.visit('/tables');

    cy.contains('table tbody tr', 'Round 6')
        .then((item) => {
            item.find('.delete').trigger('click');
        })
        .should('not.exist');

    cy.get('table tbody tr')
        .then((series) => {
            expect(series).to.have.length(6);
        });
})