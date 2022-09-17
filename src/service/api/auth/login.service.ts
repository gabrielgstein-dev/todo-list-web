import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';
import { callApiBaseAsync } from '../_base';
const endpoint = '/auth';

export const loginApiService = async (data: RequestAuthUser) => {
  return {
    data: {
      token: '123123dasasd',
    },
  };
  // return callApiBaseAsync(`${endpoint}`, {
  //   title: 'AUTH API - loginApiService',
  //   method: 'POST',
  //   headers: new Headers(),
  //   body: {
  //     email: data.username,
  //     senha: data.password,
  //   },
  // });
};
