describe('Ana Sayfa Testi', () => {
    it('Site açılıyor mu kontrol et', () => {
      cy.visit('http://localhost:3000'); // senin projenin adresi
      cy.title().should('include', 'Blog'); // title'da 'Blog' geçmeli
    });
  });
  