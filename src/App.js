import React from "react";
import TodoList from "./ToDo/TodoList";
import Context from "./context";
import AddTodo from "./ToDo/AddTodo";
function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Почистить кроссовки" },
    { id: 2, completed: false, title: "Купить молоко" },
    { id: 3, completed: true, title: "Побрить подмыханы" },
    { id: 4, completed: false, title: "Последняя задача" },
  ]);

  function toggleTodo(id) {
    // console.log("todo id", id);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Let's get it started</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
