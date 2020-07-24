async function fetchCompletedTodos() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/todos");
  // .then(responce => responce.json())
  let todos = await responce.json();
  let completedTodo = todos.filter(todo => {
    return todo.completed;
  });

  console.log(completedTodo);
}

fetchCompletedTodos();
