import React, { Component, PropTypes } from 'react';
import Status from './Status';
import NewTodo from './NewTodo';
import Todo from './Todo';

export default class App extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  };

  render() {
    const { todos, addTodo, toggleTodo, removeTodo } = this.props;

    const pending = todos.filter(todo => todo.status === 'pending').length;

    const todoComponents = todos.map(todo =>
      <li key={todo.id}>
        <Todo
          { ...todo }
          toggle={() => toggleTodo(todo.id, todo.status)}
          remove={() => removeTodo(todo.id)}
        />
      </li>
    );

    return (
      <div>
        <Status pending={pending} />
        <ul>{todoComponents}</ul>
        <NewTodo add={text => addTodo(text)} />
      </div>
    );
  }
}
