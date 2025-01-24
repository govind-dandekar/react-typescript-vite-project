import { useRef } from 'react';

const NewTodo = () => {

	// ts has no idea that this will be connected to input element
	// when useRef() is called; set generic type; have to set default
	// of null (no starting value)
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
	
		// ? in case value is null; inferred type is string | undefined
		const enteredText = todoTextInputRef.current?.value
	
	};

	return (
		<form onSubmit={submitHandler}>
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