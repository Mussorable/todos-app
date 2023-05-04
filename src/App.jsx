import AddTodo from "./AddTodo";

function App() {
  return (
    <>
      <header>
        <h1 className="text-heading">Todos</h1>
      </header>
      <main>
        <div className="container">
          <div className="main-box">
            <AddTodo />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
