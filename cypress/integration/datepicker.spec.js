

it('deve selecionar a data de nascimento', () => {
    cy.visit('/datepicker');

    const date = {
        month: 'fev',
        year: '1983',
        day: '1'
    }

    new RegExp('^' + date.day + '$', 'g');

    cy.get('.datetimepicker-dummy-input').click();

    cy.get('.datepicker-nav-month').click();
    cy.contains('.datepicker-month', date.month).click();

    cy.get('.datepicker-nav-year').click();

    cy.contains('.datepicker-year span', date.year).click();

    cy.contains('button[class=date-item]', new RegExp('^' + date.day + '$', 'g')).click();
})