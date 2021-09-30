import React from 'react'

const Todo = (props) => {
	return (
		<div onClick={props.completedToggle(props.task.id)}>
			<p></p>
			
		</div>
	)
}

export default Todo