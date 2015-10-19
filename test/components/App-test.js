import expect from 'expect';
import render from '../helpers/render';
import todoFixtures from '../fixtures/todos';
import App from '../../src/components/App';

function setup() {
  return render(App, {
    todos: todoFixtures,
    addTodo: expect.createSpy(),
    toggleTodo: expect.createSpy(),
    removeTodo: expect.createSpy(),
  });
}

describe('App Component', () => {
  it('should render a list of todos', () => {
    const { output } = setup();
    const [ , list ] = output.props.children;
    expect(list.props.children.length).toBe(4);
  });

  it('should pass # of pending todos to Status', () => {
    const { output } = setup();
    const [ status ] = output.props.children;
    expect(status.props.pending).toBe(2);
  });
});
