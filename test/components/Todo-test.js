import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Todo from '../../src/components/Todo';

function setup() {
  const props = {
    id: '1',
    text: 'take out garbage',
    status: 'pending',
    isEditing: false,
    toggle: expect.createSpy(),
    remove: expect.createSpy(),
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Todo { ...props }/>);
  const output = renderer.getRenderOutput();

  return {
    props,
    renderer,
    output,
  };
}

describe('Todo Component', () => {
  it('should render correctly', () => {
    const { output, renderer, props } = setup();

    /**
     * isEditing: false
     */

    const [ toggleButton, text ] = output.props.children;
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
    const { output, props } = setup();
    const [ toggle ] = output.props.children;

    toggle.props.onClick();
    expect(props.toggle.calls.length).toBe(1);
  });

  it('should remove todo', () => {
    const { props, renderer } = setup();

    renderer.render(<Todo { ...props } isEditing />);
    const isEditingOutput = renderer.getRenderOutput();
    const [ remove ] = isEditingOutput.props.children;

    remove.props.onClick();
    expect(props.remove.calls.length).toBe(1);
  });
});
