import expect from 'expect';
import render from '../helpers/render';
import Todo from '../../src/components/Todo';

function setup() {
  return render(Todo, {
    id: '1',
    text: 'take out garbage',
    status: 'pending',
    isEditing: false,
    toggle: expect.createSpy(),
    remove: expect.createSpy(),
  });
}

describe('Todo Component', () => {
  it('should render correctly', () => {
    const { output, rerender } = setup();

    /**
     * isEditing: false
     */

    const [ toggleButton, text ] = output.props.children;
    expect(toggleButton.props.children).toBe('pending');
    expect(text).toBe('take out garbage');

    /**
     * isEditing: true
     */

    const isEditingOutput = rerender({
      isEditing: true,
    });

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
    const { output, props } = render(Todo, {
      id: '1',
      text: 'take out garbage',
      status: 'pending',
      isEditing: true,
      toggle: expect.createSpy(),
      remove: expect.createSpy(),
    });

    const [ remove ] = output.props.children;

    remove.props.onClick();
    expect(props.remove.calls.length).toBe(1);
  });
});
