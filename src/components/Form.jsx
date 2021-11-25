import React from "react";

function Form({ inputText, setInputText, todos, setTodos }) {
	// Add todos to the  List
    const submitTodoHandler = (e) => {
        e.preventDefault()
		setTodos([
			...todos,
			{ text: inputText, completetd: false, id: Math.random() * 1000 },
        ]);
        setInputText("")
	};

	// input value change Handler
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	return (
		<form>
			<input
				type="text"
				className="todo-input"
				value={inputText}
				onChange={inputTextHandler}
			/>
			<button onClick={submitTodoHandler} className="todo-button" type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
}

export default Form;
