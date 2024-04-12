import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";





function App() {
	const [task, setTask] =useState<Array<TasksType>>(
		[
			{ id: 1, title: "html", isDone: true},
			{id: 2, title: "css", isDone: true},
			{id: 3, title: "react", isDone: false},

		]
	)
const removeTask = (taskId: number) =>{
		const newState = task.filter(t => t.id !== taskId)
setTask(newState)
}

	//const state = result[0]
	//const setState = result[1]


	// let task2: Array<TasksType> = [
	//
	// ]



	return (

			<div>
				<Todolist
					title = "What to learn"
					tasks = {task}
					removeTask={removeTask}
				/>
				{/*<Todolist title = "What to drink" tasks = {task2}/>*/}

			</div>


	) }

export default App;

