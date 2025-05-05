describe('Nested Frames', () => {
  beforeEach(() => {
    cy.visit('/nested_frames');
  });

  it('Should Verify Text in LEFT Frame', () => {
    cy.get('frame[name="frame-top"]').then($topFrame => {
      const topDoc = $topFrame[0].contentDocument;
      const leftFrame = topDoc.querySelector('frame[name="frame-left"]');
      const leftDoc = leftFrame.contentDocument;
      cy.wrap(leftDoc.body).should('contain.text', 'LEFT');
    });
  });

  it('Should Verify Text in MIDDLE Frame', () => {
    cy.get('frame[name="frame-top"]').then($topFrame => {
      const topDoc = $topFrame[0].contentDocument;
      const middleFrame = topDoc.querySelector('frame[name="frame-middle"]');
      const middleDoc = middleFrame.contentDocument;
      cy.wrap(middleDoc.body).should('contain.text', 'MIDDLE');
    });
  });

  it('Should Verify Text in RIGHT Frame', () => {
    cy.get('frame[name="frame-top"]').then($topFrame => {
      const topDoc = $topFrame[0].contentDocument;
      const rightFrame = topDoc.querySelector('frame[name="frame-right"]');
      const rightDoc = rightFrame.contentDocument;
      cy.wrap(rightDoc.body).should('contain.text', 'RIGHT');
    });
  });

  it('Should Verify Text in BOTTOM Frame', () => {
    cy.get('frame[name="frame-bottom"]').then($bottomFrame => {
      const bottomDoc = $bottomFrame[0].contentDocument;
      cy.wrap(bottomDoc.body).should('contain.text', 'BOTTOM');
    });
  });
});
