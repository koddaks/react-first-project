import React from "react";
import TodoList from './Todo/TodoList.js';

function App() {
  const [todos, setTodos] = React.useState([
  {id: 1, completed: true, title: 'buy cake', index: 1},
  {id: 2, completed: false, title: 'buy water', index: 2},
  {id: 3, completed: false, title: 'buy mouse', index: 3}
]);


  function toggleTodo (id) {
    
    setTodos(
      todos.map(todo =>{
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }

  return (
  <div className='wrapper'>
    <h1>React DOM</h1>
    <TodoList todos={todos} onToggle={toggleTodo}/>
  </div>
  )
   

}

export default App;
