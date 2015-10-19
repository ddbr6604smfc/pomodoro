import fetch from 'isomorphic-fetch';

const headers = {
  'X-Parse-Application-Id': 'HrSi99CxF6EuG39NYNCLNXdnAuZ3fdrcNEMwfxNX',
  'X-Parse-REST-API-Key': 'Qv0Os8haaE8QAbi9GNECnpMFf6oZPZDedK1jjgpT',
};

const API = {
  getTodos() {
    return fetch('https://api.parse.com/1/classes/Todo', { headers })
      .then(response => response.json())
      .then(response =>
        response.results.map(todo => ({ ...todo, id: todo.objectId }))
      );
  },

  addTodo(text) {
    return fetch('https://api.parse.com/1/classes/Todo', {
      method: 'post',
      headers,
      body: JSON.stringify({
        text,
        status: 'pending',
      }),
    });
  },

  toggleTodo(id, status) {
    const nextStatus = {
      'pending': 'finished',
      'finished': 'stopped',
      'stopped': 'pending',
    }[status];

    return fetch(`https://api.parse.com/1/classes/Todo/${id}`, {
      method: 'put',
      headers,
      body: JSON.stringify({
        status: nextStatus,
      }),
    });
  },

  removeTodo(id) {
    return fetch(`https://api.parse.com/1/classes/Todo/${id}`, {
      method: 'delete',
      headers,
    });
  },
};

export default API;
