import React from "react";




type TodolistProps ={
	title : string
	tasks: Array<TipeTask>
}
 type TipeTask ={
	id: number
	title:  string
	isDone: boolean
}
export const Todolist = (props: TodolistProps) =>{
const taskList =props.tasks.map((t, index ) => {
	return <li key={t.id}><input type="checkbox" checked={t.isDone}/><span>{t.title}</span></li>

})
	return (
		<div className="App">
			<div className="todolist">
				<h3>wat {props.title}</h3>
				<div>
				<input/>
					<button>+</button>
				</div>
				<ul>
					{taskList}
					{/*<li><input type="checkbox" checked={props.tasks[0].isDone}  /><span>{props.tasks[0].title}</span></li>*/}
					{/*<li><input type="checkbox" checked={props.tasks[1].isDone}  /><span>{props.tasks[1].title}</span></li>*/}
					{/*<li><input type="checkbox" checked={props.tasks[2].isDone}  /><span>{props.tasks[2].title}</span></li>*/}

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









