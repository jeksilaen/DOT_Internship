describe('Home Page', () => {
    it('Insert data. String of text input is present.', () => {
      cy.visit('/') // change URL to match your dev URL
      cy.get("input[type='text']").type('admin@gmail.com');
      cy.get("input[type='password']").type('qwerty');
      cy.get("button[type='submit']").click();

    //   Check token via cookies
      cy.getCookie('jwt').should('have.property', 'value') 
      cy.contains('Today');


      cy.get("input[type='text']").type('Test');
      cy.get("button[type='submit']").click();

      cy.contains('Test');

    })
})