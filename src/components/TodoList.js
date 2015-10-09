import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    editing: PropTypes.bool.isRequired,
    toggleStatus: PropTypes.func.isRequired,
    destroy: PropTypes.func.isRequired,
  };

  render() {
    const { todos, editing, toggleStatus, destroy } = this.props;

    return (
      <ul>
        {
          todos.map(todo =>
            <Todo
              key={todo.id}
              toggleStatus={toggleStatus}
              editing={editing}
              destroy={destroy}
              {...todo}
            />
          )
        }
      </ul>
    );
  }
}
