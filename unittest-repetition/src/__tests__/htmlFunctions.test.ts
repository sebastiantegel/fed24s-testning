import { createHtml } from "../htmlFunctions";
import { Todo } from "../models/Todo";

describe("Html tests", () => {
  test("it should show todos", () => {
    // Assign
    const todos: Todo[] = [new Todo("Lorem"), new Todo("ipsum")];
    document.body.innerHTML += `
      <ul id="todos"></ul>
    `;

    // Act
    createHtml(todos);

    // Assert
    const lis = document.querySelectorAll("li");
    expect(lis.length).toBe(2);
  });
});
