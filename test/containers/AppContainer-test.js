import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AppContainer from '../../src/containers/AppContainer';

describe('App Container', () => {
  it('should fetch todos after mounting', () => {
    const API = {
      getTodos: expect.createSpy().andReturn(Promise.resolve([])),
      addTodo: () => Promise.resolve([]),
      toggleTodo: () => Promise.resolve([]),
      removeTodo: () => Promise.resolve([]),
    };

    TestUtils.renderIntoDocument(<AppContainer API={API} />);
    expect(API.getTodos.calls.length).toBe(1);
  });
});
