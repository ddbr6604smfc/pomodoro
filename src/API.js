const API = {
  create(text) {
    const todo = {
      id: Math.random(),
      text,
      status: 'pending',
    };

    let todos = API.get();
    todos = [ ...todos, todo ];

    localStorage.setItem('todos', JSON.stringify(todos));

    return todo;
  },

  get() {
    let todos = JSON.parse(localStorage.getItem('todos'));

    if (!todos) {
      todos = [
        {id: Math.random(), text: 'Deploy latest `soccer` branch', status: 'finished'},
        {id: Math.random(), text: 'signup for heroku', status: 'pending'},
        {id: Math.random(), text: 'Split up Routes & Containers', status: 'pending'},
        {id: Math.random(), text: 'Finish observables lesson', status: 'stopped'},
      ];

      localStorage.setItem('todos', JSON.stringify(todos));
    }

    return todos;
  },

  toggle(id) {
    const { todos, todo, index } = API.getState(id);
    const nextStatus = {
      'pending': 'finished',
      'finished': 'stopped',
      'stopped': 'pending',
    };

    const status = nextStatus[todo.status];

    localStorage.setItem('todos', JSON.stringify([
      ...todos.slice(0, index),
      { ...todo, status: status },
      ...todos.slice(index + 1),
    ]));
  },

  destroy(id) {
    const { todos, index } = API.getState(id);

    localStorage.setItem('todos', JSON.stringify([
      ...todos.slice(0, index),
      ...todos.slice(index + 1),
    ]));
  },

  getState(id) {
    const todos = API.get();
    const todo = todos.find(item => item.id === id);
    const index = todos.indexOf(todo);

    return {
      todos,
      todo,
      index,
    };
  },
};

export default API;
