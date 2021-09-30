import React from 'react'

class TodoForm extends React.Component{
	render() {
		return (
			<div>
				<form>
					<label>
						<input type="text"
							placeholder="add item"
						/>
					</label>
					<button type="submit">Add</button>
				</form>
			</div>
		)
	}
}

export default TodoForm