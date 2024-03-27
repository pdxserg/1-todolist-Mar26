import React from "react";


type TodolistPropsType = {
	title?: string,
}
export function Todolist(props:TodolistPropsType) {

	return (
		<div>
			<h3>{props.}/h3>
			<div>
				<input type="text"/>
				<button>+</button>
			</div>
			<ul>
				<li><input type="checkbox" checked={true}/><span>HTML</span></li>
				<li><input type="checkbox" checked={true}/><span>JS</span></li>
				<li><input type="checkbox" checked={false}/><span>REACT</span></li>

			</ul>
			<div>
				<button>All</button>
				<button>Action</button>
				<button>Completed</button>
			</div>

		</div>
	)
}