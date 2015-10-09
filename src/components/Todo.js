import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    editing: PropTypes.bool.isRequired,
    toggleStatus: PropTypes.func.isRequired,
    destroy: PropTypes.func.isRequired,
  };

  render() {
    const { id, text, status, editing, toggleStatus, destroy } = this.props;

    const destroyButton = (
      <button onClick={() => destroy(id)}>
        Delete
      </button>
    );

    const statusButton = (
      <button onClick={() => toggleStatus(id)}>
        {status}
      </button>
    );

    return (
      <li>
        { editing ? destroyButton : statusButton }
        {text}
      </li>
    );
  }
}
