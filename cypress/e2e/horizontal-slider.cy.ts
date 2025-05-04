describe('Horizontal Slider', () => {
  beforeEach(() => {
    cy.visit('/horizontal_slider');
  });

  it('Slider Should Change Value when Moving', () => {
    cy.get('#range').should('have.text', '0');
    cy.get('div.sliderContainer input').invoke('val', 3.5).trigger('change');
    cy.get('#range').should('have.text', '3.5');
    cy.get('div.sliderContainer input').invoke('val', 1).trigger('change');
    cy.get('#range').should('have.text', '1');
  });
});
