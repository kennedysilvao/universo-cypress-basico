
it('Deve marcar os top 5 filmes da marvel', () => {
    cy.visit('/checkboxes');

    const movies = ['avengers', 'ironman', 'cap2', 'guardians', 'guardians2'];

    movies.forEach((m) => {
        cy.get(`input[name=${m}]`)
            .click()
            .should('be.checked');
    });
})