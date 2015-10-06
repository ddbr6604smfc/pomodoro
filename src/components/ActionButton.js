import React, { Component, PropTypes } from 'react';

export default class ActionButton extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['success', 'danger', 'warning', 'default']),
    action: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { type, children } = this.props;

    const styles = {
      button: {
        marginBottom: '15px',
      },
    };

    const className = `btn btn-${type} btn-block`;

    return (
      <button
        onClick={() => this.props.action()}
        style={styles.button}
        className={className}>
        {children}
      </button>
    );
  }
}
