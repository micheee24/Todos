function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },
    {
      text: 'learn JavaScript',
      isCompleted: false,
    },
  ])
  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted: false}]
    setTodos(newTodos)
  }
  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return(
    <>
      {todos.map((todo, i) => <div key={i} onClick={removeTodo}>{todo.text}</div>)}
      <TodoForm addTodo={addTodo}/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);