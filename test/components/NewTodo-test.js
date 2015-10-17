import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import NewTodo from '../../src/components/NewTodo';

describe('NewTodo Component', () => {
  it('should add a new todo', () => {
    const props = {
      add: expect.createSpy(),
    };

    const newTodo = TestUtils.renderIntoDocument(<NewTodo { ...props }/>);
    const form = ReactDOM.findDOMNode(newTodo);
    const [ input ] = TestUtils.scryRenderedDOMComponentsWithTag(newTodo, 'input');

    TestUtils.Simulate.change(input, {
      target: {
        value: 'hello world',
      },
    });

    TestUtils.Simulate.submit(form);
    expect(props.add.calls[0].arguments[0]).toBe('hello world');
  });

  it('should reset input value after adding new todo', () => {
    const props = {
      add: expect.createSpy(),
    };

    const newTodo = TestUtils.renderIntoDocument(<NewTodo { ...props }/>);
    const form = ReactDOM.findDOMNode(newTodo);
    const [ input ] = TestUtils.scryRenderedDOMComponentsWithTag(newTodo, 'input');

    TestUtils.Simulate.change(input, {
      target: {
        value: 'hello world',
      },
    });

    expect(input.value).toBe('hello world');
    TestUtils.Simulate.submit(form);
    expect(input.value).toBe('');
  });

  it('should only add a new todo if text isn\'t empty', () => {
    const props = {
      add: expect.createSpy(),
    };

    const newTodo = TestUtils.renderIntoDocument(<NewTodo { ...props }/>);
    const form = ReactDOM.findDOMNode(newTodo);
    const [ input ] = TestUtils.scryRenderedDOMComponentsWithTag(newTodo, 'input');

    TestUtils.Simulate.change(input, {
      target: {
        value: '       ', // whitespace
      },
    });

    TestUtils.Simulate.submit(form);
    expect(props.add.calls.length).toBe(0);
  });
});
