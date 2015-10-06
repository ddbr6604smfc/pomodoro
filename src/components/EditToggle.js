import React, { Component, PropTypes } from 'react';

export default class EditToggle extends Component {
  static propTypes = {
    editing: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  };

  render() {
    const { toggle, editing } = this.props;

    const styles = {
      margin: '30px 0',
    };

    return (
      <button
        onClick={() => toggle()}
        style={styles}
        className="btn btn-default">
        {
          editing
            ? <span>Stop Editing</span>
            : <span>Edit todos</span>
        }
      </button>
    );
  }
}
