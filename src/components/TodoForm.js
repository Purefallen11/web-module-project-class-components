import React from 'react'

class TodoForm extends React.Component{
	constructor() {
		super()
		this.state = {
			task: ''
		}
	}

	handleChange = e => {
		this.setState({
			...this.state,
			task: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.addTask(this.state.task)
	}

	

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						<input
							type="text"
							placeholder="add item"
							value={this.state.task}
							onChange={this.handleChange}
						/>
					</label>
					<button type="submit">Add</button>
				</form>
			</div>
		)
	}
}

export default TodoForm