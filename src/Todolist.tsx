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


}

export const Todolist: React.FC<TodolistPropsType> = ({tasks, title}) => {

	const taskList = tasks.map((task) => {

		return (
			<li key={task.id}>
				<input type="checkbox" checked={task.isDone}/>
				<span>{task.title}</span>
				{/*<button onClick={()=>{}}>x</button>*/}
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
					<Button onClick={()=>{}} title={"+"} />
				</div>
				{tasks.length === 0 ? (
					<p>Tasks doesn't exist</p>
				) : (
					<ul>
						{taskList}
					</ul>
				)}

				<div>
					<Button onClick={()=>{}}  title="All" />
					<Button onClick={()=>{}} title="Active" />
					<Button onClick={()=>{}} title="Completed"/>
				</div>
			</div>
		</div>
	)
}





