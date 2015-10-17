import fetch from 'isomorphic-fetch';

const headers = {
  'X-Parse-Application-Id': 'HrSi99CxF6EuG39NYNCLNXdnAuZ3fdrcNEMwfxNX',
  'X-Parse-REST-API-Key': 'Qv0Os8haaE8QAbi9GNECnpMFf6oZPZDedK1jjgpT',
};

const getTodos = () =>
  fetch('https://api.parse.com/1/classes/Todo', { headers })
    .then(response => response.json())
    .then(response =>
      response.results.map(todo => ({ ...todo, id: todo.objectId }))
    );

const addTodo = (text) =>
  fetch('https://api.parse.com/1/classes/Todo', {
    method: 'post',
    headers,
    body: JSON.stringify({
      text,
      status: 'pending',
    }),
  });

const toggleTodo = (id, status) =>
  fetch(`https://api.parse.com/1/classes/Todo/${id}`, {
    method: 'put',
    headers,
    body: JSON.stringify({
      status: {
        'pending': 'finished',
        'finished': 'stopped',
        'stopped': 'pending',
      }[status],
    }),
  });

const removeTodo = (id) =>
  fetch(`https://api.parse.com/1/classes/Todo/${id}`, {
    method: 'delete',
    headers,
  });

export default {
  getTodos,
  addTodo,
  toggleTodo,
  removeTodo,
};
