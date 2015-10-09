import { generate } from 'randomstring';

const defaultTodos = {
  'ckVsnzmmXNKa7mS5ky7Ci1NyJJbZqF7D': {
    'id': 'ckVsnzmmXNKa7mS5ky7Ci1NyJJbZqF7D',
    'text': 'Deploy latest `soccer` branch',
    'status': 'finished',
  },
  '33x4nKdK00kAMxwb7QM4eLowKaG42Q2Q': {
    'id': '33x4nKdK00kAMxwb7QM4eLowKaG42Q2Q',
    'text': 'signup for heroku',
    'status': 'pending',
  },
  'QNUGtbKinsOGee185xJLg8321s5JnLI6': {
    'id': 'QNUGtbKinsOGee185xJLg8321s5JnLI6',
    'text': 'Split up Routes & Containers',
    'status': 'pending',
  },
  'UeltX6HmKoKIgFYOsAK930fTYrka06rd': {
    'id': 'UeltX6HmKoKIgFYOsAK930fTYrka06rd',
    'text': 'Finish observables lesson',
    'status': 'stopped',
  },
};

const API = {
  add(text) {
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

  remove(id) {
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
