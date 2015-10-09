import React, { Component, PropTypes } from 'react';

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

  onSubmit = (event) => {
    event.preventDefault();
    const text = this.state.text.trim();

    if (text) {
      this.props.addTodo(text);
      this.setState({text: ''});
    }
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Todo: "
          value={this.state.text}
          onChange={this.onChange}
        />

        <input type="submit" />
      </form>
    );
  }
}
