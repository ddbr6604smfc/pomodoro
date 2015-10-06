import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  };

  render() {
    const { todos } = this.props;

    return (
      <ul className="list-group">
        {
          todos.map(todo =>
            <Todo key={todo.id} {...todo} />
          )
        }
      </ul>
    );
  }
}
