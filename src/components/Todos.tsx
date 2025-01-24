import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";


import classes from './Todos.module.css';
// props is an object that has k-v pairs but also has children
// functional components like props can be generic
// can define explicitly own props that should be combined into
// the props object;
// React.FC is a type definition -- React.FunctionalComponent
// ts will then understand that Todos is fx with a props component
// with a children field; FC is a generic type
// define own props and types in <{}>; need to tell ts how to treat fx
// internally (diff from standard ts fx declaration)
// can make props optional with ? "items?: string[]"
const Todos: React.FC<{items: Todo[], onRemoveTodo: (id: string) => void }> = (props) => {
	
	return( 
		<ul className={classes.todos}>
			{props.items.map(item => 
				<TodoItem 
					key={item.id} 
					text={item.text}
					onRemoveTodo={() => props.onRemoveTodo(item.id)}
				/>
				)}
		</ul>
	)
}

export default Todos;