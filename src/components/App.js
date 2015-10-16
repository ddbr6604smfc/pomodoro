import React, { Component, PropTypes } from 'react';
import List from './List';

export default class App extends Component {
  static propTypes = {
    getTodos: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  };

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
    this.props.addTodo(text).then(this.getUpdatedTodos);
  }

  onToggleTodo = (id, status) => {
    this.props.toggleTodo(id, status).then(this.getUpdatedTodos);
  }

  onRemoveTodo = (id) => {
    this.props.removeTodo(id).then(this.getUpdatedTodos);
  }

  getUpdatedTodos = () => {
    this.props.getTodos().then(todos => this.setState({ todos }));
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
