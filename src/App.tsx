import React from 'react';
import './App.css';
import { Todolist} from "./Todolist";





function App() {

	let task1 = [
		{someItem: "html", isDone: true},
		{someItem: "css", isDone: true},
		{someItem: "reakt", isDone: false},
	]
	let task2 = [
		{someItem: "milk", isDone: true},
		{someItem: "ice", isDone: true},
		{someItem: "bear", isDone: false},
		{someItem: "smoke", isDone: false},
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

