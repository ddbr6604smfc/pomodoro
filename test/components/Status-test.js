import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Status from '../../src/components/Status';

describe('Status Component', () => {
  it('should display the # of pending todos', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Status pending={4} />);

    const output = renderer.getRenderOutput();
    expect(output.props.children).toBe('4 todos pending');

    renderer.render(<Status pending={0} />);

    const updatedOutput = renderer.getRenderOutput();
    expect(updatedOutput.props.children).toBe('No todos pending');
  });
});
