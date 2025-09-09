import { Todo } from "../models/Todo";
import { addTodo } from "../todos";
import * as htmlFunctions from "./../htmlFunctions";

describe("Todo tests", () => {
  let mockedCreateHtml = jest.spyOn(htmlFunctions, "createHtml");
  let mockedCreateErrorHtml = jest.spyOn(htmlFunctions, "createErrorHtml");

  beforeEach(() => {
    mockedCreateHtml.mockClear();
    mockedCreateErrorHtml.mockClear();
  });

  test("it adds todo correctly", () => {
    // Assign
    const text = "Lorem";
    const hej: Todo[] = [];

    // Act
    addTodo(text, hej);

    // Assert
    expect(hej.length).toBe(1);
    expect(hej[0].text).toBe(text);
    expect(mockedCreateHtml).toHaveBeenCalled();
    expect(mockedCreateErrorHtml).not.toHaveBeenCalled();
  });

  test("it does not add todo correctly", () => {
    // Assign
    const text = "";
    const hej: Todo[] = [];

    // Act
    addTodo(text, hej);

    // Assert
    expect(hej.length).toBe(0);
    expect(mockedCreateHtml).not.toHaveBeenCalled();
    expect(mockedCreateErrorHtml).toHaveBeenCalled();
  });
});
