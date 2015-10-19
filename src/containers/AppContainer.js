import React, { Component, PropTypes } from 'react';
import App from '../components/App';

export default class AppContainer extends Component {
  static propTypes = {
    API: PropTypes.shape({
      getTodos: PropTypes.func.isRequired,
      addTodo: PropTypes.func.isRequired,
      toggleTodo: PropTypes.func.isRequired,
      removeTodo: PropTypes.func.isRequired,
    }).isRequired,
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
    this.props.API.getTodos().then(todos => this.setState({ todos }));
  }

  updateAfter = (action) => {
    return (...args) => action(...args).then(this.getUpdatedTodos);
  }

  render() {
    return (
      <App
        todos={this.state.todos}
        addTodo={this.updateAfter(this.props.API.addTodo)}
        toggleTodo={this.updateAfter(this.props.API.toggleTodo)}
        removeTodo={this.updateAfter(this.props.API.removeTodo)}
      />
    );
  }
}
