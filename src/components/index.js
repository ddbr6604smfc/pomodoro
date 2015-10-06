import React, { Component } from 'react';
import StatusPanel from './StatusPanel';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 1, text: 'Deploy latest `soccer` branch', status: 'finished'},
        {id: 2, text: 'signup for heroku', status: 'pending'},
        {id: 3, text: 'Split up Routes & Containers', status: 'pending'},
        {id: 4, text: 'Finish observables lesson', status: 'stopped'},
      ],
    };
  }

  render() {
    const { todos } = this.state;

    const pendingTodos = todos.filter(todo => todo.status === 'pending').length;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <StatusPanel pendingTodos={pendingTodos} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <TodoList todos={todos} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <AddTodo />
          </div>
        </div>
      </div>
    );
  }
}
