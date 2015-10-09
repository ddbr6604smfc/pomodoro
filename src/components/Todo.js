import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    isEditing: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  };

  render() {
    const { text, status, isEditing, toggle, remove } = this.props;

    const todoStatus = (
      <button onClick={toggle}>
        {status}
      </button>
    );

    const todoRemove = (
      <button onClick={remove}>
        Delete
      </button>
    );

    return (
      <div>
        { isEditing ? todoRemove : todoStatus }
        {text}
      </div>
    );
  }
}
