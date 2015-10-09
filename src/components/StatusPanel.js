import React, { Component, PropTypes } from 'react';

export default class StatusPanel extends Component {
  static propTypes = {
    pendingTodos: PropTypes.number.isRequired,
  };

  render() {
    const { pendingTodos } = this.props;

    const status = pendingTodos > 0
      ? `${pendingTodos} todos pending`
      : 'No todos pending';

    return <p>{status}</p>;
  }
}
