import { callApiBaseAsync } from '../_base';
const endpoint = '/projects';

export const addProject = async (data: string) => {
  const tokenCustom = localStorage.getItem('token') || '';
  return callApiBaseAsync(`${endpoint}`, {
    title: 'PROJECT API - addProject',
    method: 'POST',
    headers: new Headers(),
    body: {
      name: data,
    },
    tokenCustom,
  });
};
