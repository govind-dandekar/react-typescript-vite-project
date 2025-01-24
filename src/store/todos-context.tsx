import React, {useState} from "react";

import Todo from "../models/todo";

type TodosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
}

// describe context object type in <>
export const TodosContext = React.createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
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

	const contextValue: TodosContextObj = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler
	}
	
	return <TodosContext.Provider value={contextValue} >
		{props.children}
	</TodosContext.Provider>
}

export default TodosContextProvider;


