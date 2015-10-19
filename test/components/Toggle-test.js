import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Toggle from '../../src/components/Toggle';

function setup() {
  const props = {
    isEditing: false,
    toggle: expect.createSpy(),
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Toggle { ...props }/>);
  const output = renderer.getRenderOutput();

  return {
    props,
    renderer,
    output,
  };
}

describe('Toggle Component', () => {
  it('should render correctly', () => {
    const { output, props, renderer } = setup();


    /**
     * isEditing: false
     */

    expect(output.props.children).toBe('Edit');

    /**
     * isEditing: true
     */

    renderer.render(<Toggle { ...props } isEditing />);
    const isEditingOutput = renderer.getRenderOutput();
    expect(isEditingOutput.props.children).toBe('Cancel');
  });

  it('should toggle edit mode', () => {
    const { output, props } = setup();
    output.props.onClick();
    expect(props.toggle.calls.length).toBe(1);
  });
});
