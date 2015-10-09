import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    isEditing: PropTypes.bool.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  };

  render() {
    const { todos, isEditing, toggleTodo, removeTodo } = this.props;

    const todoComponents = todos.map(todo =>
      <li key={todo.id}>
        <Todo
          { ...todo }
          isEditing={isEditing}
          toggle={() => toggleTodo(todo.id)}
          remove={() => removeTodo(todo.id)}
        />
      </li>
    );

    return <ul>{todoComponents}</ul>;
  }
}
