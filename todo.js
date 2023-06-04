function Todo({ todo, index, remove }) {
  function handle() {
    console.log("Ping: ", index);
    remove(index);
  }
  return (
    <div className = 'parent'>
    <div className="todo" >
      {todo.text}</div>      
      <div class="container">
        <input type="checkbox" checked="checked" />
        <div class="checkmark"onClick={handle}></div>
      </div>
    </div>
  );
}
