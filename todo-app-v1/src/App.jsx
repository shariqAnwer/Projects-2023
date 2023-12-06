import "./App.css";

import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  const todoItems = [
    {
      id: 1,
      name: "Buy MIlk",
      date: "26-10-1995",
    },
    {
      id: 2,
      name: "college jao",
      date: "26-10-1995",
    },
    {
      id: 3,
      name: "gym jao",
      date: "26-10-1995",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <h1>Todo App</h1>
        <div className="container text-start">
          <AddTodo />
          <TodoItem todoItems={todoItems} />
        </div>
      </center>
    </>
  );
}

export default App;
