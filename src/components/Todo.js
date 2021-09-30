import React from 'react'

class Todo extends React.Component{
	
	render() {
		return (
		<div>
				{this.props.data.map((item) => (
					<p>{item.task}</p>
				))}
			</div>
		)
	}
}

export default Todo