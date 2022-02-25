

describe('Suite de testes', () => {


    before(() => {
        cy.log('aqui temos algo que roda antes de todos os testes')
    })

    beforeEach(() => {
        cy.log('Aqui temos algo que roda antes de cada teste')
    })


    it('teste 1', () => {
        cy.log('testando o teste 1')
    })


    it('teste 2', () => {
        cy.log('testando o teste 2')
    })


    it('teste 3', () => {
        cy.log('testando o teste 3')
    })

    afterEach(() => {
        cy.log('Aqui temos algo que roda depois de cada teste')
    })

    after(() => {
        cy.log('Aqui temos algo que roda depois de todos os testes')
    })

})
