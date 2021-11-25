import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("All");
	const [filteredTodos, setFilteredTodos] = useState([]);
	// USE EFFECT
	useEffect(() => {
		filteredTodoHandler();
	}, [todos, status]);

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
