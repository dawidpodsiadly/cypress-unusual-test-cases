describe('A/B Testing', () => {
  beforeEach(() => {
    cy.visit('/abtest');
  });

  it('A/B Test Control', () => {
    cy.setCookie('optimizelyBuckets', '%7B%22298349752%22%3A%22298291000%22%7D');
    cy.setCookie('optimizelyEndUserId', 'oeu1665296421799r0.1092416905447644');
    cy.reload();
    cy.contains('h3', 'A/B Test Control').should('be.visible');
  });

  it('A/B Test Variation 1', () => {
    cy.setCookie('optimizelyBuckets', '%7B%22298349752%22%3A%22298343790%22%7D');
    cy.setCookie('optimizelyEndUserId', 'oeu1665349048094r0.1503419388184688');
    cy.reload();
    cy.contains('h3', 'A/B Test Variation 1').should('be.visible');
  });
});
