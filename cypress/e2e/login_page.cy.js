describe('Home Page', () => {
    it('Valid login credentials, redirected to homepage. JWT cookie is present', () => {
      cy.visit('/') // change URL to match your dev URL
      cy.get("input[type='text']").type('admin@gmail.com');
      cy.get("input[type='password']").type('qwerty');
      cy.get("button[type='submit']").click();

    //   Check token via cookies
      cy.getCookie('jwt').should('have.property', 'value') 
      cy.contains('Today');
    })
})