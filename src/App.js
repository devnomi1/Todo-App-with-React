import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("All");
	const [filteredTodos, setFilteredTodos] = useState([]);


  // RUn Once when App Start
 useEffect(() => {
   getLocalTodos();
   
 }, [])
  

	// USE EFFECT
	useEffect(() => {
		filteredTodoHandler();
		
		saveLocalTodos();
	}, [todos, status]);

	// Checked filtered todo
	function filteredTodoHandler() {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
		}
	}
	// Save todos to Local Storage
	function saveLocalTodos() {
		localStorage.setItem("todos", JSON.stringify(todos));
	}

	// get todos from local storage
	function getLocalTodos() {
		if (localStorage.getItem("todos" === null)) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
		setTodos(todoLocal)
		}
	}

	return (
		<>
			<Header />
			<Form
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList
				filteredTodos={filteredTodos}
				todos={todos}
				setTodos={setTodos}
			/>
		</>
	);
}

export default App;
