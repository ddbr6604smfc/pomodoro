import React, { Component, PropTypes } from 'react';
import AddTodoForm from './AddTodoForm';
import AddTodoToggle from './AddTodoToggle';

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  onToggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  onAddTodo = (text) => {
    this.props.addTodo(text);
    this.onToggleOpen();
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        {
          isOpen
            ? <AddTodoForm addTodo={this.onAddTodo} />
            : null
        }
        <AddTodoToggle onToggleOpen={this.onToggleOpen} isOpen={isOpen} />
      </div>
    );
  }
}
