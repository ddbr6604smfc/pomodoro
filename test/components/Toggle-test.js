import expect from 'expect';
import render from '../helpers/render';
import Toggle from '../../src/components/Toggle';

function setup() {
  return render(Toggle, {
    isEditing: false,
    toggle: expect.createSpy(),
  });
}

describe('Toggle Component', () => {
  it('should render correctly', () => {
    const { output, rerender } = setup();


    /**
     * isEditing: false
     */

    expect(output.props.children).toBe('Edit');

    /**
     * isEditing: true
     */

    const isEditingOutput = rerender({
      isEditing: true,
    });

    expect(isEditingOutput.props.children).toBe('Cancel');
  });

  it('should toggle edit mode', () => {
    const { output, props } = setup();
    output.props.onClick();
    expect(props.toggle.calls.length).toBe(1);
  });
});
