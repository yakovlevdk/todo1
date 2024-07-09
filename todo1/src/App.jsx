import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((list) => {
        setTodos(list);
      });
  }, []);

  return (
    <>
      <div className="todo-list">
        <h1>Список дел (jsonplaceholder)</h1>
        <ul>
          {todos.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
