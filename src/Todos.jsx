import { useEffect } from "react";

export default function Todos({ todoList }) {
  return (
    <div className="todo-list">
      {todoList &&
        todoList.map((todo, index) => {
          return (
            <div key={index} className="todo-item">
              <h3>{todo.todo}</h3>
              <p>{todo.todoDesc}</p>
            </div>
          );
        })}
    </div>
  );
}
