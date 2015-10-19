import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NewTodo from '../../src/components/NewTodo';

function setup() {
  const props = {
    add: expect.createSpy(),
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<NewTodo { ...props }/>);
  const output = renderer.getRenderOutput();

  return {
    props,
    renderer,
    output,
  };
}

describe('NewTodo Component', () => {
  it('should add a new todo', () => {
    const { output, props } = setup();
    const [ input ] = output.props.children;

    input.props.onChange({
      target: {
        value: 'hello world',
      },
    });

    output.props.onSubmit({
      preventDefault: () => {},
    });

    expect(props.add.calls[0].arguments[0]).toBe('hello world');
  });

  it('should reset input value after adding new todo', () => {
    const { output, renderer } = setup();
    const [ input ] = output.props.children;

    input.props.onChange({
      target: {
        value: 'hello world',
      },
    });

    output.props.onSubmit({
      preventDefault: () => {},
    });

    const updatedOutput = renderer.getRenderOutput();
    const [ updatedInput ] = updatedOutput.props.children;
    expect(updatedInput.props.value).toBe('');
  });

  it('should only add a new todo if text isn\'t empty', () => {
    const { output, props } = setup();
    const [ input ] = output.props.children;

    input.props.onChange({
      target: {
        value: '      ',
      },
    });

    output.props.onSubmit({
      preventDefault: () => {},
    });

    expect(props.add.calls.length).toBe(0);
  });
});
