// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
	
	return(
		<div>
			{props.data.map((task) => (
				<Todo key={task.id} task={task} completedToggle={props.completedToggle} />
			))}
			<button onClick={props.clearTask}>Clear list</button>
		</div >
	)
}

export default TodoList