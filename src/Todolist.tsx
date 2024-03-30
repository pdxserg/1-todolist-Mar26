import React from "react";




export function Todolist() {

	return (
		<div className="App">
			<div className="todolist">
				<h3>wat lern</h3>
				<div>
					<input/>
					<button>+</button>
				</div>
				<ul>
					<li><input type="checkbox" checked={false}/> <span>ddd</span></li>
					<li><input type="checkbox" checked={false}/> <span>ddd</span></li>
					<li><input type="checkbox" checked={false}/> <span>ddd</span></li>


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









