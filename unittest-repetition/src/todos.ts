import { createErrorHtml, createHtml } from "./htmlFunctions";
import { Todo } from "./models/Todo";

export const addTodo = (todoText: string, todos: Todo[]) => {
  if (todoText.length > 0) {
    const todo = new Todo(todoText);
    todos.push(todo);
    createHtml(todos);
  } else {
    createErrorHtml("Du måste ange en todo-text");
  }
};

export const removeTodo = () => {};

export const toggleTodo = () => {};
