import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  };

  render() {
    const { text, status, toggle, remove } = this.props;

    return (
      <div>
        <button onClick={toggle}>{status}</button>
        {text}
        <button onClick={remove}>Delete</button>
      </div>
    );
  }
}
