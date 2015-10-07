import { generate } from 'randomstring';
import defaultTodos from './todos';

const API = {
  create(text) {
    const todos = API.getState();

    const todo = {
      id: generate(),
      text,
      status: 'pending',
    };

    API.saveState({
      ...todos,
      [todo.id]: todo,
    });

    return todo;
  },

  get() {
    const todos = API.getState();
    return Object.keys(todos).map(id => todos[id]);
  },

  toggle(id) {
    const todos = API.getState();
    const todo = todos[id];

    const nextStatus = {
      'pending': 'finished',
      'finished': 'stopped',
      'stopped': 'pending',
    };

    const status = nextStatus[todo.status];

    API.saveState({
      ...todos,
      [todo.id]: {
        ...todo,
        status,
      },
    });
  },

  destroy(id) {
    const todos = API.getState();
    delete todos[id];
    API.saveState(todos);
  },

  getState() {
    let todos = JSON.parse(localStorage.getItem('todos'));

    if (!todos) {
      todos = API.createNewLocalStorageTodos();
    }

    return todos;
  },

  saveState(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  },

  createNewLocalStorageTodos() {
    API.saveState(defaultTodos);
    return defaultTodos;
  },
};

export default API;
