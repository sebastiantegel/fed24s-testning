import { FormEvent, useState } from "react";
import { Todo } from "../models/Todo";
import { ApiResponse } from "../models/ApiResponse";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [userInput, setUserInput] = useState("");

  const handleGetData = async () => {
    const response = await fetch("http://awesomeapi/todos");

    if (response.status === 200) {
      const data: ApiResponse = await response.json();
      setTodos(data.todos);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://awesomeapi/todos", {
      method: "POST",
      body: userInput,
    });

    if (response.status === 201) {
      const newTodo: Todo = await response.json();
      setTodos([...todos, newTodo]);
      setUserInput("");
    } else {
      // Present error to user
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="todoText"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button id="saveTodo">Spara</button>
      </form>
      <ul id="todos">
        {todos.map((t) => (
          <li key={t.id}>
            <span>{t.text}</span>
          </li>
        ))}
      </ul>
      <div>
        <button id="getData" onClick={handleGetData}>
          Hämta data
        </button>
      </div>
    </>
  );
};
