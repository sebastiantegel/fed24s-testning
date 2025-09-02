describe("Todo tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show empty list", () => {
    cy.get("ul#todos").children().should("have.length", 0);
  });

  it("should add a todo", () => {
    // Assign
    const input = cy.get("input#todoText").should("exist");
    const button = cy
      .get("button#saveTodo")
      .should("exist")
      .should("have.text", "Spara");

    // Act
    input.type("Lorem");
    button.click();

    // Assert
    cy.get("ul#todos").children().should("have.length", 1);
    cy.get("ul#todos").children().first().should("have.text", "Lorem");
  });

  it("should empty the input after adding a todo", () => {
    const input = cy.get("input#todoText").should("exist");
    const button = cy
      .get("button#saveTodo")
      .should("exist")
      .should("have.text", "Spara");

    // Act
    input.type("Lorem");
    button.click();

    // Assert
    cy.get("input#todoText").should("have.value", "");
  });
});
