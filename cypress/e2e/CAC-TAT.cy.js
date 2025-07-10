describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it.only('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Walmyr')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('q5a5A@example.com')
    cy.get('#phone').type('11999999999')
    cy.get('#product').select('Blog')
    cy.get('#support-type').check('Feedback')
  })
    

})