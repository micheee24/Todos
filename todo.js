function Todo({ todo, index, remove }) {
  function handle() {
    console.log("Ping: ", index);
    remove(index);
  }
  return (
    <div className="todo" onClick={handle}>
      {todo.text}
      <label class="container">
        <input type="checkbox" checked="checked" />
        <div class="checkmark"></div>
      </label>
    </div>
  );
}
