import { useState } from "react";

class Todo {
  id: number;
  text: string;

  constructor(text: string) {
    this.id = Date.now();
    this.text = text;
  }
}

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <input
        id="todoText"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        id="saveTodo"
        onClick={() => {
          setTodos([...todos, new Todo(userInput)]);
          setUserInput("");
        }}
      >
        Spara
      </button>
      <ul id="todos">
        {todos.map((t) => (
          <li key={t.id}>
            <span>{t.text}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
