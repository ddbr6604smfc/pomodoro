import React, { Component } from 'react';
import API from '../API';
import StatusPanel from './StatusPanel';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import EditToggle from './EditToggle';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      todos: API.get(),
    };
  }

  onUpdate = () => {
    this.setState({
      todos: API.get(),
    });
  }

  onToggleEdit = () => {
    this.setState({
      editing: !this.state.editing,
    });
  }

  onAddTodo = (text) => {
    API.create(text);
    this.onUpdate();
  }

  onToggleStatus = (id) => {
    API.toggle(id);
    this.onUpdate();
  }

  onDestroyTodo = (id) => {
    API.destroy(id);
    this.onUpdate();
  }

  render() {
    const { editing, todos } = this.state;

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
            <TodoList
              todos={todos}
              editing={editing}
              toggleStatus={this.onToggleStatus}
              destroy={this.onDestroyTodo}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <AddTodo addTodo={this.onAddTodo} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6 col-xs-offset-3 text-center">
            <EditToggle toggle={this.onToggleEdit} editing={editing} />
          </div>
        </div>
      </div>
    );
  }
}
