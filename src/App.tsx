import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

	return (
		<div>
			<Todolist title ="What to lern"/>
			<Todolist title = "Movies"/>
			<Todolist title = "SOmething"/>
		</div>
		// <div className="App">
		//     <div>
		//         <h3>What to learn</h3>
		//         <div>
		//             <input/>
		//             <button>+</button>
		//         </div>
		//         <ul>
		//             <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
		//             <li><input type="checkbox" checked={true}/> <span>JS</span></li>
		//             <li><input type="checkbox" checked={false}/> <span>React</span></li>
		//         </ul>
		//         <div>
		//             <button>All</button>
		//             <button>Active</button>
		//             <button>Completed</button>
		//         </div>
		//     </div>
		// </div>
	);
}

export default App;

