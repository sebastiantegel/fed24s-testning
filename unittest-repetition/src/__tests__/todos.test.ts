import { Todo } from "../models/Todo";
import { addTodo } from "../todos";
import * as htmlFunctions from "./../htmlFunctions";

describe("todos tests", () => {
  const mockedCreateHtml = jest.spyOn(htmlFunctions, "createHtml");
  const mockedCreateErrorHtml = jest.spyOn(htmlFunctions, "createErrorHtml");

  beforeEach(() => {
    mockedCreateHtml.mockClear();
  });

  test("it should add a todo", () => {
    // Assign
    const todoText = "Hej hej";
    const todos: Todo[] = [];

    // Act
    addTodo(todoText, todos);

    // Assert
    expect(todos.length).toBe(1);
    expect(todos[0].text).toBe(todoText);
    expect(mockedCreateHtml).toHaveBeenCalled();
  });

  test("it should not add empty todo", () => {
    // Assign
    const todoText = "";
    const todos: Todo[] = [];

    // Act
    addTodo(todoText, todos);

    // Assert
    expect(todos.length).toBe(0);
    expect(mockedCreateHtml).not.toHaveBeenCalled();
    expect(mockedCreateErrorHtml).toHaveBeenCalled();
  });

  test("it should remove a todo", () => {});

  test("it should toggle a todo", () => {});
});
