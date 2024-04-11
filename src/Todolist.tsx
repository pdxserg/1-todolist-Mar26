import React from "react";
import {Button} from "./components/Button";
import s from'./components/Button.module.css'

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
		return (
			<li key={task.id}>
				<input type="checkbox" checked={task.isDone}/>
				<span>{task.title}</span>
			</li>
		)
	})
	return (
		<div className="App">
			<div className="todolist">
				<h3>{title}</h3>
				<div>
					<input/>
					<Button onclick={()=>{} } title="-" />
				</div>
				{tasks.length === 0 ? (
					<p>Tasks doesn't exist</p>
				) : (
					<ul>
						{taskList}
					</ul>
				)}

				<div>
					<Button onclick={()=>{}} title="All" color={'red'}/>
					<Button onclick={()=>{}} title="Active" color={'secondary'}/>
					<Button onclick={()=>{}} title="Completed" disabled/>
				</div>
			</div>
		</div>
	)
}





