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

  function handleCheckboxChange(event) {
    event.target.setAttribute("disabled", "disabled");
    todoItemRef.current[event.target.getAttribute("data--order")].classList.add(
      "to-deletion"
    );
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
              className="todo-item"
            >
              <div className="item-header">
                <h3 className="h3 item-name">{todo.todo}</h3>
                <div className="item-checkbox">
                  <Input
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
