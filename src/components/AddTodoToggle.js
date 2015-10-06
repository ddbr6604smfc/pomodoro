import React, { Component, PropTypes } from 'react';
import { blue, white } from '../colors';
import ActionButton from './ActionButton';

export default class AddTodoToggle extends Component {
  static propTypes = {
    onToggleOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

  render() {
    const { onToggleOpen, isOpen } = this.props;

    if (isOpen) {
      return (
        <ActionButton type="danger" action={onToggleOpen}>
          <span style={{color: white}} className="glyphicon glyphicon-remove" />
        </ActionButton>
      );
    }

    return (
      <ActionButton type="default" action={onToggleOpen}>
        <span style={{color: blue}} className="glyphicon glyphicon-plus" />
      </ActionButton>
    );
  }
}
