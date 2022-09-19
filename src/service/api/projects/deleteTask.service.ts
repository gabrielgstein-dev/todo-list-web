import { callApiBaseAsync } from '../_base';
const endpoint = '/projects/delete-task';

export const deleteTask = async (id: number) => {
  const tokenCustom = localStorage.getItem('token') || '';
  return callApiBaseAsync(`${endpoint}`, {
    title: 'AUTH API - delete-task',
    method: 'POST',
    headers: new Headers(),
    body: {
      id,
    },
    tokenCustom,
  });
};
