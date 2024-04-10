import React from "react";
import {Button} from "./Button";


export type TasksType = {
	id: number
	title: string
	isDone: boolean
}
type TodolistPropsType = {
	title: string
	tasks: Array<TasksType>
}

export const Todolist: React.FC<TodolistPropsType> = ({tasks, title}) => {

	const taskList = tasks.map((task) => {
		return <li key={task.id}><input type="checkbox" checked={task.isDone}/><span>{task.title}</span></li>
	})
	return (
		<div className="App">
			<div className="todolist">
				<h3>{title}</h3>
				<div>
					<input/>
					<Button title="-"/>
				</div>
				{tasks.length === 0 ? (
					<p>Tasks doesn't exist</p>
				) : (
					<ul>
						{taskList}
					</ul>
				)}

				<div>
					<Button title="All"/>
					<Button title="Active"/>
					<Button title="Completed"/>
				</div>
			</div>
		</div>
	)
}





