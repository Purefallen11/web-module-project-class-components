import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  data = [
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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <Todo data={this.data} />
      </div>
    );
  }
}

export default App;
