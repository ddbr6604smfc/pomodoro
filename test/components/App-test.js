import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import todoFixtures from '../fixtures/todos';
import App from '../../src/components/App';

function setup() {
  const props = {
    todos: todoFixtures,
    addTodo: expect.createSpy(),
    toggleTodo: expect.createSpy(),
    removeTodo: expect.createSpy(),
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<App { ...props }/>);
  const output = renderer.getRenderOutput();

  return {
    props,
    renderer,
    output,
  };
}

describe('App Component', () => {
  it('should render a list of todos', () => {
    const { output } = setup();
    const [ , , list ] = output.props.children;
    expect(list.props.children.length).toBe(4);
  });

  it('should pass # of pending todos to Status', () => {
    const { output } = setup();
    const [ status ] = output.props.children;
    expect(status.props.pending).toBe(2);
  });

  it('should toggle edit mode', () => {
    const { output, renderer } = setup();
    const [ , toggle ] = output.props.children;

    expect(toggle.props.isEditing).toBe(false);
    toggle.props.toggle();

    const updatedOutput = renderer.getRenderOutput();
    const [ , updatedToggle ] = updatedOutput.props.children;
    expect(updatedToggle.props.isEditing).toBe(true);
  });
});
