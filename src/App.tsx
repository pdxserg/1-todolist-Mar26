import React from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";





function App() {
	 let task1: Array<TasksPropsType>  = [
		{id: 1, lesson: "CSS", isDone: true},
		{id: 2, lesson: "HTML", isDone: false},
		{id: 3, lesson: "REACT", isDone: true},
	]
	 let task2 = [
		{id: 1, lesson: "a", isDone: false},
		{id: 2, lesson: "b", isDone: true},
		{id: 3, lesson: "c", isDone: true},
		{id: 4, lesson: "d", isDone: true},
	]
	const todolist1 = "What to learn"
	return (
		<div>
			<Todolist title = {todolist1} tasks={task1} />
			<Todolist title = "What to do"  tasks={task2}/>

		</div>


	) }

export default App;

