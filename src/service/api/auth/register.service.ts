import { RequestRegisterUser } from '@models/datacore';
import { callApiBaseAsync } from '../_base';
const endpoint = '/users/register';

export const register = async ({ email, password, passwordConfirmation }: RequestRegisterUser) => {
  return callApiBaseAsync(`${endpoint}`, {
    title: 'AUTH API - register',
    method: 'POST',
    headers: new Headers(),
    body: {
      email,
      password,
      passwordConfirmation,
    },
  });
};
