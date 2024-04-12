import React from "react";
import {Button} from "./components/Button";


export type TasksType = {
	id: number
	title: string
	isDone: boolean
}
type TodolistPropsType = {
	title: string
	tasks: Array<TasksType>
	removeTask: (taskId: number)=> void

}

export const Todolist: React.FC<TodolistPropsType> = ({tasks, title, removeTask}) => {

	const taskList = tasks.map((task) => {
		const removeTaskHandler = () =>{removeTask(task.id)}
		return (
			<li key={task.id}>
				<input type="checkbox" checked={task.isDone}/>
				<span>{task.title}</span>
				<button onClick={removeTaskHandler}>x</button>
				{/*<button onClick={removeTaskHendler}>x</button>*/}
			</li>
		)
	})
	return (
		<div className="App">
			<div className="todolist">
				<h3>{title}</h3>
				<div>
					<input/>
					<Button title={"+"} />
				</div>
				{tasks.length === 0 ? (
					<p>Tasks doesn't exist</p>
				) : (
					<ul>
						{taskList}
					</ul>
				)}

				<div>
					<Button  title="All" color={'red'}/>
					<Button  title="Active" color={'secondary'}/>
					<Button  title="Completed" disabled/>
				</div>
			</div>
		</div>
	)
}





