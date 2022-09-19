import { RequestToggleTaskDatacore } from '@models/datacore';
import { callApiBaseAsync } from '../_base';
const endpoint = '/projects/toggle-task';

export const toggleTask = async (data: RequestToggleTaskDatacore) => {
  const tokenCustom = localStorage.getItem('token') || '';
  return callApiBaseAsync(`${endpoint}`, {
    title: 'AUTH API - toggle-task',
    method: 'POST',
    headers: new Headers(),
    body: {
      id: data.id,
      done: data.done,
    },
    tokenCustom,
  });
};
