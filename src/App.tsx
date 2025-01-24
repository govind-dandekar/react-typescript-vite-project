import { useState } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {

  // ts cant infer values of empty array
  // useState is a generic fx
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    
    setTodos((prevTodos) => {
      return [newTodo, ...prevTodos]
    })
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos  => {
      return prevTodos.filter(todo => todo.id !== todoId)
    }))
  }

  return (
    <div>
      <NewTodo 
        onAddTodo={addTodoHandler}
      />
      <Todos 
        items={todos}
        onRemoveTodo={removeTodoHandler}
      />
    </div>
  )
}

export default App;
