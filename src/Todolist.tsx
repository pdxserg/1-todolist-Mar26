import React from "react";
import {Button} from "./components/Button";
import {FilterType} from "./App";



export type TasksType = {
	id: number
	title: string
	isDone: boolean
}
type TodolistPropsType = {
	title: string
	tasks: Array<TasksType>
	removeTask: (id:number)=>void
	changeF:(value: FilterType)=>void
}

export const Todolist: React.FC<TodolistPropsType> = ({tasks, title, removeTask, changeF}) => {


	return (
		<div className="App">
			<div className="todolist">
				<h3>{title}</h3>
				<div>
					<input/>
					<Button onCl={()=>{}} title={"+"} />
				</div>
				{tasks.length === 0 ? (
					<p>Tasks doesn't exist</p>
				) : (
					<ul>
						{tasks.map((task) => {

							return (
							<li key={task.id}>
						<input type="checkbox" checked={task.isDone}/>
						<span>{task.title}</span>
								<Button onCl={()=>{removeTask(task.id)}} title={"X"}/>
						{/*<button onClick={()=>{}}>x</button>*/}
						{/*<button onClick={removeTaskHendler}>x</button>*/}
					</li>
				)
				})}
					</ul>
				)}

				<div>
					<Button onCl={()=>changeF("all") } title="All" />
					<Button onCl={()=>changeF("act")} title="Active" />
					<Button onCl={()=>changeF("compl")} title="Completed"/>
				</div>
			</div>
		</div>
	)
}





