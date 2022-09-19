/* eslint-disable no-debugger */
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { api } from '@service';
import { toast } from 'react-toastify';

import { auth, app } from '@recoil';
import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';
import { RequestRegisterUser } from '~/models/datacore';

export const useAuthentication = () => {
  const setToken = useSetRecoilState(auth.atom.token);
  const setLoading = useSetRecoilState(app.appLoading);
  const navigate = useNavigate();

  const login = async (credentials: RequestAuthUser) => {
    try {
      setLoading(true);
      const response = await api.auth.login(credentials);
      localStorage.setItem('token', response.token);
      setToken(response.token);
      setLoading(false);
      toast.success('Bem vindo a Bolt Tech!');
    } catch (error) {
      toast.error('Erro ao tentar logar!');
      console.error(error);
    }
  };

  const register = async (credentials: RequestRegisterUser) => {
    try {
      setLoading(true);
      const response = await api.auth.register(credentials);
      toast.success('Registrado com sucesso!');
      navigate('/');

      setLoading(false);
      return response;
    } catch (error) {
      toast.error('Erro ao registrar usuário!');
      console.error(error);
    }
  };

  return {
    login,
    register,
  };
};
