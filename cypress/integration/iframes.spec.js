
const niceIFrame = () => {
    return cy
            .get('#weareqaninja')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
}

const badIFrame = () => {
    return cy
            .get('iframe[src*=instagram]')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
}

it('deve validar o total de seguidores', () => {
    cy.visit('/nice_iframe');

    niceIFrame().contains('.FollowerCountText',  '6,301 followers')
        .should('be.visible');
})

it('deve validar o total de seguidores', () => {
    cy.visit('/bad_iframe');

    badIFrame().contains('.FollowerCountText',  '6,301 followers')
        .should('be.visible');
})