import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';
import { callApiBaseAsync } from '../_base';
const endpoint = '/users/login';

export const login = async (data: RequestAuthUser) => {
  return callApiBaseAsync(`${endpoint}`, {
    title: 'AUTH API - login',
    method: 'POST',
    headers: new Headers(),
    body: {
      email: data.email,
      password: data.password,
    },
  });
};
