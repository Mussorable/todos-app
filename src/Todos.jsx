import { useState } from "react";
import { useEffect } from "react";
import Input from "./Input";

export default function Todos({ todoList, idList }) {
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
                    id={idList[index] ? idList[index] : "unknown-key"}
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
