import { callApiBaseAsync } from '../_base';
const endpoint = '/projects';

export const getAll = async () => {
  const tokenCustom = localStorage.getItem('token') || '';
  return callApiBaseAsync(`${endpoint}`, {
    title: 'AUTH API - getAll',
    method: 'GET',
    headers: new Headers(),
    tokenCustom,
  });
};
