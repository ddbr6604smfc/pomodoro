import React, { Component } from 'react';
import API from '../API';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: API.get(),
    };
  }

  onUpdate = () => {
    this.setState({
      todos: API.get(),
    });
  }

  onAddTodo = (text) => {
    API.add(text);
    this.onUpdate();
  }

  onToggleTodo = (id) => {
    API.toggle(id);
    this.onUpdate();
  }

  onRemoveTodo = (id) => {
    API.destroy(id);
    this.onUpdate();
  }

  render() {
    const { todos } = this.state;

    return (
      <List
        todos={todos}
        addTodo={this.onAddTodo}
        toggleTodo={this.onToggleTodo}
        removeTodo={this.onRemoveTodo}
      />
    );
  }
}
