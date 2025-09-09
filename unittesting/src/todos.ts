import { createErrorHtml, createHtml } from "./htmlFunctions";
import { Todo } from "./models/Todo";

export const addTodo = (todoText: string, todos: Todo[]) => {
  if (todoText.length > 0) {
    const todo = new Todo(todoText);
    todos.push(todo);

    createHtml(todos);
  } else {
    createErrorHtml();
  }
};

export const removeTodo = (i: number, todos: Todo[]) => {
  todos.splice(i, 1);
};

export const toggleTodo = (todo: Todo) => {
  todo.done = !todo.done;
};
