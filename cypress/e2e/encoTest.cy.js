describe('Testando...', () => {
  it('Transações...',()=>{
    cy.visit('https://devfinance-agilizei.netlify.app/')
    cy.get('header > img').should('be.visible')
  });

    it('Manter Transações...',()=>{
    cy.visit('https://devfinance-agilizei.netlify.app/')
    cy.get('header > img').should('be.visible')

    cy.get('#transaction > .button').click()
    cy.get('#form > h2').contains('Nova Transação')

    cy.get('#description').type('Primeira Transação')
    cy.get('#amount').type('200.000')
    cy.get('#date').type('2023-10-12')
    cy.get('button').contains('Salvar').click()
  });
})