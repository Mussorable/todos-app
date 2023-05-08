import { useState } from "react";
import { useRef } from "react";
import Input from "./Input";

export default function Todos({
  todoList,
  idList,
  handleDelAction,
  handleIdList,
  handleTodoList,
}) {
  const todoItemRef = useRef([]);
  const [todoElement, setTodoElement] = useState();

  function handleCheckboxChange(event) {
    setTodoElement(event.target.id);
    setTimeout(() => {
      const uID = event.target.getAttribute("id");
      handleDelAction(`todo-list/${uID}.json`)
        .catch((error) => console.error(error))
        .finally(() => {
          handleIdList((prevValue) =>
            prevValue.filter((item, index) => {
              if (item === uID) {
                handleTodoList((prevValue) =>
                  prevValue.filter((item) => item != todoList[index])
                );
              }
              return item != uID;
            })
          );
        });
    }, 1000);
  }

  return (
    <div className="todo-list">
      {todoList &&
        todoList.map((todo, index) => {
          return (
            <div
              ref={(element) => (todoItemRef.current[index] = element)}
              key={idList[index]}
              className={`todo-item ${
                idList.includes(todoElement) ? "to-deletion" : ""
              }`}
            >
              <div className="item-header">
                <h3 className="h3 item-name">{todo.todo}</h3>
                <div className="item-checkbox">
                  <Input
                    disabled={idList.includes(todoElement)}
                    data--order={index}
                    onChange={handleCheckboxChange}
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
