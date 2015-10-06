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

  onAddTodo = (text) => {
    const todo = {
      id: this.state.todos.length + 1,
      text,
      status: 'pending',
    };

    this.setState({
      todos: [ ...this.state.todos, todo ],
    });
  }

  onToggleStatus = (id) => {
    const todo = this.state.todos.find(item => item.id === id);
    const index = this.state.todos.indexOf(todo);

    const nextStatus = {
      'pending': 'finished',
      'finished': 'stopped',
      'stopped': 'pending',
    };

    const status = nextStatus[todo.status];

    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        { ...todo, status: status },
        ...this.state.todos.slice(index + 1),
      ],
    });
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
            <TodoList todos={todos} toggleStatus={this.onToggleStatus} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <AddTodo addTodo={this.onAddTodo} />
          </div>
        </div>
      </div>
    );
  }
}
