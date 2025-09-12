import { Todo } from "./models/Todo";
import { addTodo } from "./todos";

const todos: Todo[] = [];

document.getElementById("todoForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = (document.getElementById("userInput") as HTMLInputElement)
    .value;

  addTodo(todoText, todos);
});
