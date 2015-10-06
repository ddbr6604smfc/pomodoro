import React, { Component } from 'react';
import { blue } from '../colors';

export default class AddTodo extends Component {
  render() {
    const styles = {
      button: {
        color: blue,
      },
    };

    return (
      <button style={styles.button} className="btn btn-default btn-block">
        <span className="glyphicon glyphicon-plus" />
      </button>
    );
  }
}
