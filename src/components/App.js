import React, { Component } from 'react';
import API from '../API';
import ListStatus from './ListStatus';
import List from './List';
import ListNewTodo from './ListNewTodo';
import ListToggle from './ListToggle';

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

    const pending = todos.filter(todo => todo.status === 'pending').length;

    return (
      <div>
        <ListStatus pending={pending} />
        <List
          todos={todos}
          isEditing={editing}
          toggleTodo={this.onToggleStatus}
          removeTodo={this.onDestroyTodo}
        />
        <ListNewTodo add={this.onAddTodo} />
        <ListToggle isEditing={editing} toggle={this.onToggleEdit} />
      </div>
    );
  }
}
