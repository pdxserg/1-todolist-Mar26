import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";


export type FilterValuesType = "all" | "active" | "completed"

function App() {
	const [task, setTask] = useState<Array<TasksType>>(
		[
			{id: 1, title: "html", isDone: true},
			{id: 2, title: "css", isDone: true},
			{id: 3, title: "react", isDone: false},

		]
	)
	const removeTask = (taskId: number) => {
		const newState = task.filter(t => t.id !== taskId)
		setTask(newState)
	}

	const [filter, setFilter] = useState<FilterValuesType>("all")
	const changeTodoList = (nextFilter: FilterValuesType) => {

		setFilter(nextFilter)
	}
	const getTaskForTodolist = (allTasks: Array<TasksType>, nextFilterValue: FilterValuesType) => {

		switch (nextFilterValue) {
			case "active":
				return allTasks.filter(a => a.isDone === false);
			case "completed":

				return allTasks.filter(a => a.isDone === true);
			default:
				return allTasks;


		}
	}
	const taskForTodolist = getTaskForTodolist(task, filter)

	// let task2: Array<TasksType> = [
	// ]


	return (

		<div>
			<Todolist
				title="What to learn"
				tasks={taskForTodolist}
				removeTask={removeTask}
				changeTodoList={changeTodoList}
			/>
			{/*<Todolist title = "What to drink" tasks = {task2}/>*/}

		</div>


	)
}

export default App;

