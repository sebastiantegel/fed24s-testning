import { Todo } from "./models/Todo";
import { addTodo } from "./todos";

export const add = (x: number, y: number) => {
  return x + y;
};

const todos: Todo[] = [];

document.getElementById("todoForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = (document.getElementById("userInput") as HTMLInputElement)
    .value;

  addTodo(todoText, todos);
});
