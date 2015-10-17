import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import todoFixtures from '../fixtures/todos';
import App from '../../src/components/App';
import Status from '../../src/components/Status';
import Toggle from '../../src/components/Toggle';
import Todo from '../../src/components/Todo';

describe('App Component', () => {
  it('should render Todos', () => {
    const props = {
      todos: todoFixtures,
      addTodo: expect.createSpy(),
      toggleTodo: expect.createSpy(),
      removeTodo: expect.createSpy(),
    };

    const app = TestUtils.renderIntoDocument(<App { ...props }/>);
    const todos = TestUtils.scryRenderedComponentsWithType(app, Todo);
    expect(todos.length).toBe(4);
  });

  it('should pass # of pending todos to Status', () => {
    const props = {
      todos: todoFixtures,
      addTodo: expect.createSpy(),
      toggleTodo: expect.createSpy(),
      removeTodo: expect.createSpy(),
    };

    const app = TestUtils.renderIntoDocument(<App { ...props }/>);
    const status = TestUtils.findRenderedComponentWithType(app, Status);
    expect(status.props.pending).toBe(2);
  });

  it('should toggle edit mode', () => {
    const props = {
      todos: todoFixtures,
      addTodo: expect.createSpy(),
      toggleTodo: expect.createSpy(),
      removeTodo: expect.createSpy(),
    };

    const app = TestUtils.renderIntoDocument(<App { ...props }/>);
    const toggle = TestUtils.findRenderedComponentWithType(app, Toggle);

    TestUtils.Simulate.click(ReactDOM.findDOMNode(toggle));
    expect(app.state.isEditing).toBe(true);
  });
});
