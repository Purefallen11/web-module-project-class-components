import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      
      data : [
        {
          task: 'take out trash',
      id: 0,
      completed: false
    },
    {
      task: 'catch the smurfs',
      id: 1,
      completed: false
    },
    {
      task: 'take over the world',
      id: 2,
      completed: false
    },
    {
      task: 'code a new social media app',
      id: 3,
      completed: false
    }
  ]
}
}

  addTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
    data: [...this.state.data, newTask]
    })
  }

  completedToggle = (taskId) => {
    const newData = this.state.data.map(task => {
      if (task.id === taskId) {
        return ({ ...task, completed: !task.completed })
      }
      else {
        return (task)
      }
    });
    this.setState({
      ...this.state,
      data: newData
    })
  }

  clearTask = () => {
    this.setState({
      ...this.state,
      data: this.state.data.filter(task => !task.completed)
    })
  }
  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
          data={this.state.data}
          clearTask={this.clearTask}
          completedToggle={this.completedToggle}
        />
      </div>
    );
  }
}

export default App;
