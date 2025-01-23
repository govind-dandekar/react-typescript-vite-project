// not a component so is a .ts file (not .tsx)
// defining a class that is meant to be instantiated
// but props never receive a value w/o constructor()
class Todo {
	// set prop values
	id: string;
	text: string;

	// constructor
	constructor(todoText: string){
		this.text = todoText,
		// not ideal but use for now
		this.id = new Date().toISOString();
	}
}

export default Todo;

