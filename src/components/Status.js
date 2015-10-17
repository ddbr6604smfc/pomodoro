import React, { Component, PropTypes } from 'react';

export default class Status extends Component {
  static propTypes = {
    pending: PropTypes.number.isRequired,
  };

  render() {
    const { pending } = this.props;

    const status = pending > 0
      ? `${pending} todos pending`
      : 'No todos pending';

    return <p>{status}</p>;
  }
}
