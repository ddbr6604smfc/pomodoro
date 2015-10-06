import React, { Component, PropTypes } from 'react';
import { blue } from '../colors';
import ActionButton from './ActionButton';

export default class AddTodoForm extends Component {
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
    this.props.addTodo(this.state.text.trim());
    this.setState({text: ''});
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
      input: {
        color: blue,
        fontSize: '0.9em',
        fontWeight: 'bold',
        letterSpacing: '0.2px',
        padding: '10px 15px',
        width: '100%',
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginBottom: '30px',
      },
    };

    return (
      <div>
        <form onSubmit={this.onSubmit} className="row">
          <div className="col-xs-12">
            <input
              style={styles.input}
              type="text"
              value={this.state.text}
              placeholder="Todo: "
              onChange={this.onChange}
            />
          </div>
        </form>
        <div className="row">
          <div className="col-xs-12">
            <ActionButton type="success" action={this.onAddTodo}>
              <span className="glyphicon glyphicon-plus" />
            </ActionButton>
          </div>
        </div>
      </div>
    );
  }
}
