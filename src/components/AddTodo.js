import React, { Component, PropTypes } from 'react';
import { blue } from '../colors';

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  onAddTodo = () => {
    const text = this.state.text.trim();

    if (text) {
      this.props.addTodo(text);
      this.setState({text: ''});
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.onAddTodo();
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    const styles = {
      base: {
        color: blue,
      },

      container: {
        // marginBottom: '100px', // temp
      },

      input: {
        color: blue,
        fontSize: '0.9em',
        fontWeight: 'bold',
        letterSpacing: '0.2px',
        padding: '10px 15px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxShadow: 'none',
      },
    };

    return (
      <form onSubmit={this.onSubmit} style={styles.container}>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Todo: "
            value={this.state.text}
            onChange={this.onChange}
            style={{ ...styles.base, ...styles.input }}
          />
          <span className="input-group-btn" onClick={this.onAddTodo}>
            <button style={styles.base} className="btn btn-default" type="button">
              <span className="glyphicon glyphicon-plus" />
            </button>
          </span>
        </div>
      </form>
    );
  }
}
