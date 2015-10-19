import expect from 'expect';
import render from '../helpers/render';
import Status from '../../src/components/Status';

describe('Status Component', () => {
  it('should display the # of pending todos', () => {
    const { output, rerender } = render(Status, {
      pending: 4,
    });

    expect(output.props.children).toBe('4 todos pending');

    const updatedOutput = rerender({pending: 0});
    expect(updatedOutput.props.children).toBe('No todos pending');
  });
});
