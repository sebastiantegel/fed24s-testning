import { Todo } from "./models/Todo";

export const createHtml = (todos: Todo[]) => {
  const ul = document.getElementById("todos");

  if (ul) {
    ul.innerHTML = "";
  }

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");

    li.innerHTML = todos[i].text;

    ul?.appendChild(li);
  }
};

export const createErrorHtml = (errorMessage: string) => {
  const errorTag = document.createElement("div");

  errorTag.className = "error";
  errorTag.innerHTML = errorMessage;

  document.body.appendChild(errorTag);
};
