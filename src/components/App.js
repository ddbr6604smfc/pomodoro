import React, { Component } from 'react';
import API from '../API';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.getUpdatedTodos();
  }

  onAddTodo = (text) => {
    API.add(text).then(this.getUpdatedTodos);
  }

  onToggleTodo = (id, status) => {
    API.toggle(id, status).then(this.getUpdatedTodos);
  }

  onRemoveTodo = (id) => {
    API.remove(id).then(this.getUpdatedTodos);
  }

  getUpdatedTodos = () => {
    API.get().then(todos => this.setState({ todos }));
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
