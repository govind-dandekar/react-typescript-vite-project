import { useRef } from 'react';

import classes from './NewTodo.module.css'

// () => describes a type of function (param: type) => return type
const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {

	// ts has no idea that this will be connected to input element
	// when useRef() is called; set generic type; have to set default
	// of null (no starting value)
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
	
		// current? in case value is null; inferred type is string | undefined
		// can use ! if you know that value can never be null; type is string
		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0){
			// throw an error
			return;
		}

		props.onAddTodo(enteredText);
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor='text'>Todo text</label>
			<input 
				type='text' 
				id='text' 
				ref={todoTextInputRef}
			/>
			<button>Add Todo</button>
		</form>
	)
}

export default NewTodo;