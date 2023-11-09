import commands from '../support/commands'

  describe('Manter Transações', () =>{
    beforeEach(()=>{
      cy.acessaDevFinances()
    })
    it('Excluir transção...',()=>{
      cy.get('#transaction > .button').click()
      cy.get('#form > h2').contains('Nova Transação')

      cy.get('#description').type('Primeira Transação')
      cy.get('#amount').type('200.000')
      cy.get('#date').type('2023-10-12')
      cy.get('button').contains('Salvar').click()

      //cy.get(':nth-child(4) > img').click()
      cy.contains('.description','Primeira Transação').parent().find('img').click()
  });

  })

    