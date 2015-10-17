import React, { Component, PropTypes } from 'react';
import App from '../components/App';

export default class AppContainer extends Component {
  static propTypes = {
    getTodos: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.getUpdatedTodos();
  }

  getUpdatedTodos = () => {
    this.props.getTodos().then(todos => this.setState({ todos }));
  }

  updateAfter = (action) => {
    return (...args) => action(...args).then(this.getUpdatedTodos);
  }

  render() {
    return (
      <App
        todos={this.state.todos}
        addTodo={this.updateAfter(this.props.addTodo)}
        toggleTodo={this.updateAfter(this.props.toggleTodo)}
        removeTodo={this.updateAfter(this.props.removeTodo)}
      />
    );
  }
}
