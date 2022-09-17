import { useSetRecoilState } from 'recoil';
import { api } from '@service';

import { auth, app } from '@recoil';
import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';

export const useAuthentication = () => {
  const setToken = useSetRecoilState(auth.atom.token);
  const setLoading = useSetRecoilState(app.appLoading);

  const login = async (credentials: RequestAuthUser) => {
    try {
      setLoading(true);
      const response = await api.loginApiService(credentials);
      localStorage.setItem('refreshToken', response.data.token);
      setToken(response.data.token);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    login,
  };
};
