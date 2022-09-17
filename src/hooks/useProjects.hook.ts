import { useSetRecoilState } from 'recoil';
import { api } from '@service';

import { auth, app } from '@recoil';

export const useAuthentication = () => {
  const setLoading = useSetRecoilState(app.appLoading);

  const getAll = async () => {
    try {
      setLoading(true);
      const response = await api.projects.getAll();
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    login,
  };
};
