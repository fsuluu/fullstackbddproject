describe('Register Form', () => {
    it('should submit register form', () => {
      cy.visit('http://localhost:3000/register')
  
      cy.get('input[placeholder="Ad"]').type('Test Kullanıcı')
      cy.get('input[placeholder="Email"]').type('test@example.com')
      cy.get('input[placeholder="Parola"]').type('123456')
  
      cy.contains('Kayıt Ol').click()
  
      cy.contains('Kayıt başarılı').should('exist')
    })
  })
  