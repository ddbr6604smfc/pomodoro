import React, { Component, PropTypes } from 'react';
import { yellow, green } from '../colors';

export default class StatusPanel extends Component {
  static propTypes = {
    pendingTodos: PropTypes.number.isRequired,
  };

  render() {
    const { pendingTodos } = this.props;

    const styles = {
      container: {
        backgroundColor: pendingTodos > 0 ? yellow : green,
        margin: '30px 0',
      },

      body: {
        padding: '10px',
      },

      text: {
        color: 'white',
        fontSize: '1.1em',
        margin: '0',
      },
    };

    const status = pendingTodos > 0
      ? `${pendingTodos} todos pending`
      : 'No todos pending';

    return (
      <div style={styles.container} className="panel panel-default">
        <div style={styles.body} className="panel-body">
          <p style={styles.text}>
            {status}
          </p>
        </div>
      </div>
    );
  }
}
