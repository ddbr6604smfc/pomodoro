import React, { Component, PropTypes } from 'react';
import ListStatus from './ListStatus';
import ListToggle from './ListToggle';
import ListNewTodo from './ListNewTodo';
import Todo from './Todo';

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
  }

  onToggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {
    const { todos, addTodo, toggleTodo, removeTodo } = this.props;

    const pending = todos.filter(todo => todo.status === 'pending').length;

    const todoComponents = todos.map(todo =>
      <li key={todo.id}>
        <Todo
          { ...todo }
          isEditing={this.state.isEditing}
          toggle={() => toggleTodo(todo.id, todo.status)}
          remove={() => removeTodo(todo.id)}
        />
      </li>
    );

    return (
      <div>
        <ListStatus pending={pending} />
        <ListToggle
          isEditing={this.state.isEditing}
          toggle={this.onToggleEdit}
        />
        <ul>{todoComponents}</ul>
        <ListNewTodo add={text => addTodo(text)} />
      </div>
    );
  }
}
