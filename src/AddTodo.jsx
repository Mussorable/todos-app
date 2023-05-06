import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

export default function AddTodo({ handlePostAction, handleTodoList }) {
  const [todo, setTodo] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  function resetForm() {
    setTodo("");
    setTodoDesc("");
  }

  function addToExistingList(todo, todoDesc) {
    handleTodoList((prevValue) => [...prevValue, { todo, todoDesc }]);
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    handlePostAction("todo-list.json", {
      todo,
      todoDesc,
    }).catch((error) => console.error(error));
    addToExistingList(todo, todoDesc);

    resetForm();
  }

  return (
    <div className="form-box">
      <form onSubmit={handleSubmitForm}>
        <div className="inputs-field">
          <Input
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            placeholder="Write new todo*"
            hideLabel
            labelText="Todo"
            type="text"
            id="todo-heading"
            required
          />
          <Input
            value={todoDesc}
            onChange={(event) => setTodoDesc(event.target.value)}
            placeholder="Quick description"
            hideLabel
            labelText="Quick description"
            type="text"
            id="todo-desc"
          />
        </div>
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
}
