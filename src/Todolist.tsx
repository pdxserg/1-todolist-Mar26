import React from "react";

type TasksPropsType = {
	title: string;
	isDone: boolean;
	id: number
}

type TodolistPropsType = {
	title: string;
	tasks: Array<TasksPropsType>;
}

export function Todolist(props: TodolistPropsType) {
const title = props.title
const tasks = props.tasks
	const taskList: Array<JSX.Element> = tasks.map(task => {
		return (
				< li key={task.id}>
					< input type = "checkbox" checked = {task.isDone} />
					<span>{task.title}</span >
				</li>
			)

	})
	return (
		<div className="App">
			<div className="todolist">
				<h3>wat {title}</h3>
				<div>
					<input/>
					<button>+</button>
				</div>
				<ul>
					{taskList}

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









