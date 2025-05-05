describe('Sortable Data Tables', () => {
  beforeEach(() => {
    cy.visit('/tables');
  });

  const checkRowData = (rowIndex, expectedData) => {
    cy.get(`#table1 tr`)
      .eq(rowIndex)
      .should($row => {
        expectedData.forEach(data => {
          expect($row.text()).to.include(data);
        });
      });
  };

  it(`Should Verify Row Data after 'Due' Sorting`, () => {
    cy.contains('Due').click();
    checkRowData(1, ['Smith', 'John', 'jsmith@gmail.com', '$50.00', 'http://www.jsmith.com', 'edit', 'delete']);
    checkRowData(2, ['Conway', 'Tim', 'tconway@earthlink.net', '$50.00', 'http://www.timconway.com', 'edit', 'delete']);
    checkRowData(3, ['Bach', 'Frank', 'fbach@yahoo.com', '$51.00', 'http://www.frank.com', 'edit', 'delete']);
    checkRowData(4, ['Doe', 'Jason', 'jdoe@hotmail.com', '$100.00', 'http://www.jdoe.com', 'edit', 'delete']);

    cy.contains('Due').click();
    checkRowData(1, ['Doe', 'Jason', 'jdoe@hotmail.com', '$100.00', 'http://www.jdoe.com', 'edit', 'delete']);
    checkRowData(2, ['Bach', 'Frank', 'fbach@yahoo.com', '$51.00', 'http://www.frank.com', 'edit', 'delete']);
    checkRowData(3, ['Smith', 'John', 'jsmith@gmail.com', '$50.00', 'http://www.jsmith.com', 'edit', 'delete']);
    checkRowData(4, ['Conway', 'Tim', 'tconway@earthlink.net', '$50.00', 'http://www.timconway.com', 'edit', 'delete']);
  });
});
