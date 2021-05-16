import request from 'superagent';

const URL = '/api/stuff';

export async function getStuff() {
  const response = await request.get(URL);
  return response.body;
}

export async function getThing(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}