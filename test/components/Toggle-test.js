import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Toggle from '../../src/components/Toggle';

describe('Toggle Component', () => {
  it('should render correctly', () => {
    const props = {
      isEditing: false,
      toggle: expect.createSpy(),
    };

    const renderer = TestUtils.createRenderer();

    /**
     * isEditing: false
     */

    renderer.render(<Toggle { ...props } />);
    const defaultOutput = renderer.getRenderOutput();
    expect(defaultOutput.props.children).toBe('Edit');

    /**
     * isEditing: true
     */

    renderer.render(<Toggle { ...props } isEditing />);
    const isEditingOutput = renderer.getRenderOutput();
    expect(isEditingOutput.props.children).toBe('Cancel');
  });

  it('should toggle edit mode', () => {
    const props = {
      isEditing: false,
      toggle: expect.createSpy(),
    };

    const toggle = TestUtils.renderIntoDocument(<Toggle { ...props} />);
    TestUtils.Simulate.click(ReactDOM.findDOMNode(toggle));
    expect(props.toggle.calls.length).toBe(1);
  });
});
