import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    toggleStatus: PropTypes.func.isRequired,
  };

  render() {
    const { todos, toggleStatus } = this.props;

    const styles = {
      container: {
        marginBottom: '30px',
      },
    };

    return (
      <ul className="list-group" style={styles.container}>
        {
          todos.map(todo =>
            <Todo key={todo.id} toggleStatus={toggleStatus} {...todo} />
          )
        }
      </ul>
    );
  }
}
