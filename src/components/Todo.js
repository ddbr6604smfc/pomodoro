import React, { Component, PropTypes } from 'react';
import { blue } from '../colors';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  };

  render() {
    const { id, text, status } = this.props;

    const labelClasses = {
      'finished': 'label label-success',
      'pending': 'label label-warning',
      'stopped': 'label label-danger',
    };

    const styles = {
      text: {
        color: blue,
        fontSize: '0.9em',
        fontWeight: 'bold',
        letterSpacing: '0.2px',
      },
    };

    return (
      <button key={id} className="list-group-item" style={styles.text}>
        <div className="row">
          <div className="col-xs-9">
            {text}
          </div>
          <div className="col-xs-3">
            <span className={labelClasses[status]}>
              {status}
            </span>
          </div>
        </div>
      </button>
    );
  }
}
