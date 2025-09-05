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
    cy.intercept("POST", "http://awesomeapi/*", {
      statusCode: 201,
      body: {
        id: 1,
        text: "Lorem",
      },
    });

    // Act
    input.type("Lorem{enter}");

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
    cy.intercept("POST", "http://awesomeapi/*", {
      statusCode: 201,
      body: {
        id: 1,
        text: "Lorem",
      },
    });

    // Act
    input.type("Lorem");
    button.click();

    // Assert
    cy.get("input#todoText").should("have.value", "");
  });

  it("should get data from api", () => {
    cy.intercept("GET", "http://awesomeapi/*", {
      statusCode: 200,
      body: {
        todos: [
          { id: 1, text: "Lorem" },
          { id: 2, text: "ipsum" },
        ],
      },
    });

    const button = cy.get("button#getData").should("exist");
    button.click();

    cy.get("ul#todos").children().should("have.length", 2);
    cy.get("ul#todos").children().first().should("have.text", "Lorem");
  });

  it("should verify done on a todo", () => {});

  it("should be able to toggle a todo", () => {});
});
