import { init } from "../personApp";

jest.mock("./../services/personService");

describe("Person App tests", () => {
  test("it should present html correctly", async () => {
    // Assign
    document.body.innerHTML = `<ul id="persons"></ul>`;

    // Act
    await init();

    // Assert
    const personTags = document.getElementsByTagName("li");
    expect(personTags.length).toBe(3);
  });
});
