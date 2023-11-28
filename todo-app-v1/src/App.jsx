import "./App.css";

import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <>
      <center className="todo-container">
        <h1>Todo App</h1>
        <div className="container text-start">
          <AddTodo />
          {/* ----------------------------- */}
          <TodoItem />
        </div>
      </center>
    </>
  );
}

export default App;
