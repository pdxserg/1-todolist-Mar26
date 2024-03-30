import React from 'react';
import './App.css';
import { Todolist} from "./Todolist";





function App() {

	let task1 = [
		{id: 1, title: "html", isDone: true},
		{id: 2, title: "css", isDone: true},
		{id: 3, title: "reakt", isDone: false},
	]
	let task2 = [
		{id: 4, title: "milk", isDone: true},
		{id: 5, title: "ice", isDone: true},
		{id: 6, title: "bear", isDone: false},
		{id: 7, title: "smoke", isDone: false},
	]
	return (
		<div>
			<div>
				<Todolist title = "What to  learn" tasks={task1}  />
				<Todolist title = "What to  eat" tasks={task2}/>

			</div>
		</div>


	) }

export default App;

