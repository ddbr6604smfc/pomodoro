import React, { Component, PropTypes } from 'react';
import { blue } from '../colors';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    toggleStatus: PropTypes.func.isRequired,
  };

  render() {
    const { id, text, status, toggleStatus } = this.props;

    const styles = {
      text: {
        color: blue,
        fontSize: '0.9em',
        fontWeight: 'bold',
        letterSpacing: '0.2px',
      },
    };

    const labelClasses = {
      'finished': 'label label-success',
      'pending': 'label label-warning',
      'stopped': 'label label-danger',
    };

    const className = labelClasses[status];

    return (
      <button
        key={id}
        className="list-group-item"
        style={styles.text}
        onClick={() => toggleStatus(id)}
      >
        <div className="row">
          <div className="col-xs-9">
            {text}
          </div>
          <div className="col-xs-3">
            <span className={className}>
              {status}
            </span>
          </div>
        </div>
      </button>
    );
  }
}
