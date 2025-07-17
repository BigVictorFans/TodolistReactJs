import AddItem from "./components/AddTodoForm";
import List from "./components/TodoList";
import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([
      {
        id: 1,
        text: "Task 1",
        isCompleted: true
      },
      {
        id: 2,
        text: "Task 2",
        isCompleted: false
      },
      {
        id: 3,
        text: "Task 3",
        isCompleted: false
      }
  ]);
  return (
    <div>
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <List todos={todos} setTodos={setTodos} />
          <AddItem
            //method 1
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App
