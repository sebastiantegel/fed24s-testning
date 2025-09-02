describe("Demo tests", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });

  it("should add when clicking the button", () => {
    // Assign
    cy.visit("http://localhost:5173");
    const button = cy.get("button").should("exist");

    // Act
    button.click();

    // Assert
    cy.get("button").should("contain.text", "1");
  });
});
