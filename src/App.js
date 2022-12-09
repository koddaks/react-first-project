import React from "react";
import TodoList from './Todo/TodoList.js';
import Context from "./context.js";
import AddTodo from "./Todo/AddTodo.js";

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1 , completed: true, title: 'Make project on React with video'},
    {id: 2 , completed: false, title: 'Make My own project on React'},
    {id: 3 , completed: true, title: 'Try hard'}    
  ])
  
    
  
  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed 
        }
        return todo
      }) 
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

 return (
  <Context.Provider value={{removeTodo}}>
  <div className="wrapper">
    <h1>To do List</h1>
    <AddTodo onCreate={addTodo} />

    {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No Tasks</p>}
    
  </div>
  
  </Context.Provider>
 )

}

export default App;
