import expect from 'expect';
import render from '../helpers/render';
import NewTodo from '../../src/components/NewTodo';

function setup() {
  return render(NewTodo, {
    add: expect.createSpy(),
  });
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
    const { output, rerender } = setup();
    const [ input ] = output.props.children;

    input.props.onChange({
      target: {
        value: 'hello world',
      },
    });

    output.props.onSubmit({
      preventDefault: () => {},
    });

    const updatedOutput = rerender();
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
