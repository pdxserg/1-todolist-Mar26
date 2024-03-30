import React from "react";

type TasksPropsType={
	someItem: string;
	isDone: boolean
}

type TodolistPropsType ={
	title: string;
	tasks: Array<TasksPropsType>;
}

export function Todolist(props: TodolistPropsType) {
const nameCard = props.title
	const nameSomeitem = props.tasks


	return (
		<div className="App">
			<div className="todolist">
				<h3>wat {nameCard}</h3>
				<div>
					<input/>
					<button>+</button>
				</div>
				<ul>
					<li><input type="checkbox" checked={nameSomeitem[0].isDone}/> <span>{nameSomeitem[0].someItem}</span></li>
					<li><input type="checkbox" checked={nameSomeitem[1].isDone}/> <span>{nameSomeitem[1].someItem}</span></li>
					<li><input type="checkbox" checked={nameSomeitem[2].isDone}/> <span>{nameSomeitem[2].someItem}</span></li>




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









