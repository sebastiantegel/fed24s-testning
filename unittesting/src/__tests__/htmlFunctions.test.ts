import { createHtml } from "../htmlFunctions";
import { Todo } from "../models/Todo";

describe("Html function tests", () => {
  test("id should render correct html", () => {
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
