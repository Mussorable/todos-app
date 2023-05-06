import { useEffect } from "react";
import Input from "./Input";

export default function Todos({ todoList }) {
  return (
    <div className="todo-list">
      {todoList &&
        todoList.map((todo, index) => {
          return (
            <div key={index} className="todo-item">
              <div className="item-header">
                <h3 className="h3">{todo.todo}</h3>
                <div className="item-checkbox">
                  <Input
                    labelText="Resolve"
                    // refactor to take the uID
                    id={index}
                    type="checkbox"
                  />
                </div>
              </div>
              {todo.todoDesc && <p>{todo.todoDesc}</p>}
            </div>
          );
        })}
    </div>
  );
}
