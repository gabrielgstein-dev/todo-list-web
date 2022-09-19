import { RequestRegisterTaskDatacore } from '@models/datacore';
import { callApiBaseAsync } from '../_base';
const endpoint = '/projects/add-task';

export const addTask = async (data: RequestRegisterTaskDatacore) => {
  const tokenCustom = localStorage.getItem('token') || '';
  return callApiBaseAsync(`${endpoint}`, {
    title: 'AUTH API - addTask',
    method: 'POST',
    headers: new Headers(),
    body: {
      name: data.name,
      done: data.done,
      projectId: data.projectId,
    },
    tokenCustom,
  });
};
