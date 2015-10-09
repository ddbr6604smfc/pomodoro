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
    API.addTodo(text).then(this.getUpdatedTodos);
  }

  onToggleTodo = (id, status) => {
    API.toggleTodo(id, status).then(this.getUpdatedTodos);
  }

  onRemoveTodo = (id) => {
    API.removeTodo(id).then(this.getUpdatedTodos);
  }

  getUpdatedTodos = () => {
    API.getTodos().then(todos => this.setState({ todos }));
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
