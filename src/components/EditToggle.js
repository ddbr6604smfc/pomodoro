import React, { Component, PropTypes } from 'react';

export default class EditToggle extends Component {
  static propTypes = {
    editing: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  };

  render() {
    const { toggle, editing } = this.props;

    return (
      <button onClick={() => toggle()}>
        {
          editing
            ? <span>Stop Editing</span>
            : <span>Edit todos</span>
        }
      </button>
    );
  }
}
