import Input from "./Input";
import Button from "./Button";

export default function AddTodo() {
  function handleSubmitForm(event) {
    event.preventDefault();
  }

  return (
    <div className="form-box">
      <form onSubmit={handleSubmitForm}>
        <div className="inputs-field">
          <Input
            placeholder="Write new todo"
            hideLabel
            labelText="Todo"
            type="text"
            id="todo-heading"
          />
          <Input
            placeholder="Quick description"
            hideLabel
            labelText={"Quick description"}
            type="text"
            id="todo-desc"
          />
        </div>
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
}
