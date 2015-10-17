import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Todo from '../../src/components/Todo';

describe('Todo Component', () => {
  it('should render correctly', () => {
    const props = {
      id: '1',
      text: 'take out garbage',
      status: 'pending',
      isEditing: false,
      toggle: expect.createSpy(),
      remove: expect.createSpy(),
    };

    const renderer = TestUtils.createRenderer();

    /**
     * isEditing: false
     */

    renderer.render(<Todo { ...props } />);
    const defaultOutput = renderer.getRenderOutput();
    const [ toggleButton, text ] = defaultOutput.props.children;
    expect(toggleButton.props.children).toBe('pending');
    expect(text).toBe('take out garbage');

    /**
     * isEditing: true
     */

    renderer.render(<Todo { ...props } isEditing />);
    const isEditingOutput = renderer.getRenderOutput();
    const [ removeButton ] = isEditingOutput.props.children;
    expect(removeButton.props.children).toBe('Delete');
  });

  it('should toggle todo status', () => {
    const props = {
      id: '1',
      text: 'take out garbage',
      status: 'pending',
      isEditing: false,
      toggle: expect.createSpy(),
      remove: expect.createSpy(),
    };

    const todo = TestUtils.renderIntoDocument(<Todo { ...props }/>);
    const toggleButton = TestUtils.findRenderedDOMComponentWithTag(
      todo,
      'button'
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(toggleButton));
    expect(props.toggle.calls.length).toBe(1);
  });

  it('should remove todo', () => {
    const props = {
      id: '1',
      text: 'take out garbage',
      status: 'pending',
      isEditing: true,
      toggle: expect.createSpy(),
      remove: expect.createSpy(),
    };

    const todo = TestUtils.renderIntoDocument(<Todo { ...props }/>);
    const removeButton = TestUtils.findRenderedDOMComponentWithTag(
      todo,
      'button'
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(removeButton));
    expect(props.remove.calls.length).toBe(1);
  });
});
