export function Todos({ todos }) {
  return (
    <>
      {todos.map(function (todo) {
        return (
          <div id={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </>
  );
}
