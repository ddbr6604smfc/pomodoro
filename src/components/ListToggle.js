import React, { Component, PropTypes } from 'react';

export default class ListToggle extends Component {
  static propTypes = {
    isEditing: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  };

  render() {
    const { toggle, isEditing } = this.props;

    const message = isEditing ? 'Cancel' : 'Edit';

    return (
      <button onClick={toggle}>
        {message}
      </button>
    );
  }
}
