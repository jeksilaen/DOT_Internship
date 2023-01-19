describe('Login Page', () => {
  it('Denied access to home page, redirected to login page.', () => {
    cy.visit('/') 


    cy.getCookies().should('be.empty')

  })
})