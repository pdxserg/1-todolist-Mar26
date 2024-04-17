import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";
import exp from "node:constants";


export type FilterType = "all" | "compl"| "act"

function App() {
	let [task, setTask] =useState([
		{id: 1, title: "html", isDone: true},
		{id: 2, title: "css", isDone: true},
		{id: 3, title: "react", isDone: false},
		{id: 4, title: "react", isDone: false},
		{id: 5, title: "react", isDone: false},
	])
	let [f,setF]= useState<FilterType>("all")

function removeTask (id: number){
		let newTask= task.filter(el => el.id !== id)

	setTask(newTask)
}

	function changeFilter (value: FilterType){
		setF(value)
	}

let taskForTodo = task
	if(f === "compl"){
		taskForTodo = task.filter(el => el.isDone === true)
	}
	if(f === "act"){
		taskForTodo = task.filter(el => el.isDone === false)
	}


	return (

		<div>
			<Todolist
				title="What to learn"
				tasks={taskForTodo}
				removeTask = {removeTask}
				changeF={changeFilter}
			/>

		</div>


	)
}

export default App;

