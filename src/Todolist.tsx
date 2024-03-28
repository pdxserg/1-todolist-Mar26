import React from "react";



type TodolistPropsType = {
	title: string
	 tasks: Array<TasksPropsType>
}
export type TasksPropsType = {
	 id: number
	 lesson: string
	 isDone: boolean
}

export function Todolist({tasks, title}: TodolistPropsType,  ) {
	// const type = props.title
	// const tasks = props.tasks

	const listItems = []
	for(let i =0; i < tasks.length; i++ ){
		listItems.push(
			<li>
			 	<input type="checkbox"
			 	           checked={tasks[i].isDone}/>
			 		<span>{tasks[i].lesson}</span>
			 </li>
		)

	}

	return (
		<div className="App">
			<div className="todolist">
				<h3>{title}</h3>
				<div>
					<input/>
					<button>+</button>
				</div>
				<ul>

					{/*<li><input type="checkbox" checked={tasks[0].isDone}/> <span>{tasks[0].lesson}</span></li>*/}
					{/*<li><input type="checkbox" checked={tasks[1].isDone}/> <span>{tasks[1].lesson}</span></li>*/}
					{/*<li><input type="checkbox" checked={tasks[2].isDone}/> <span>{tasks[2].lesson}</span></li>*/}

				</ul>
				<div>
					<button>All</button>
					<button>Active</button>
					<button>Completed</button>
				</div>
			</div>
		</div>
	)
}