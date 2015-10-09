import fetch from 'isomorphic-fetch';

// required for every Parse request
const headers = {
  'X-Parse-Application-Id': 'HrSi99CxF6EuG39NYNCLNXdnAuZ3fdrcNEMwfxNX',
  'X-Parse-REST-API-Key': 'Qv0Os8haaE8QAbi9GNECnpMFf6oZPZDedK1jjgpT',
};

function get() {
  return fetch('https://api.parse.com/1/classes/Todo', { headers })
    .then(response => response.json())
    .then(response => {
      return response.results.map(todo => ({ ...todo, id: todo.objectId }));
    });
}

function add(text) {
  const options = {
    method: 'post',
    headers,
    body: JSON.stringify({
      text,
      status: 'pending',
    }),
  };

  return fetch('https://api.parse.com/1/classes/Todo', options);
}

function toggle(id, status) {
  const nextStatus = {
    'pending': 'finished',
    'finished': 'stopped',
    'stopped': 'pending',
  }[status];

  const options = {
    method: 'put',
    headers,
    body: JSON.stringify({
      status: nextStatus,
    }),
  };

  return fetch(`https://api.parse.com/1/classes/Todo/${id}`, options);
}

function remove(id) {
  const options = {
    method: 'delete',
    headers,
  };

  return fetch(`https://api.parse.com/1/classes/Todo/${id}`, options);
}

export default {
  get,
  add,
  toggle,
  remove,
};
