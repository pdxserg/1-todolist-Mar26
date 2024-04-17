import React from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";


export type FilterValuesType = "all" | "active" | "completed"

function App() {
	const task1=[
			{id: 1, title: "html", isDone: true},
			{id: 2, title: "css", isDone: true},
			{id: 3, title: "react", isDone: false},
		]


	const task2: Array<TasksType>=[

	]

	return (

		<div>
			<Todolist title="What to learn" tasks={task1}/>
			<Todolist title = "What to drink" tasks = {task2}/>

		</div>


	)
}

export default App;

