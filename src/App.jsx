import { useEffect } from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import useFetch from "./useFetch";

function App() {
  const [todoList, setTodoList] = useState([]);
  const { post, get } = useFetch(
    "https://pet-hotel-375a8-default-rtdb.europe-west1.firebasedatabase.app/"
  );

  useEffect(() => {
    get("todo-list.json").then((data) => setTodoList(Object.values(data)));
  }, []);

  return (
    <>
      <header>
        <h1 className="text-heading">Todos</h1>
      </header>
      <main>
        <div className="container">
          <div className="main-box">
            <AddTodo handleTodoList={setTodoList} handlePostAction={post} />
            <Todos todoList={todoList} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
