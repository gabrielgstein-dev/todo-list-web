import React from 'react';
import { LoginBanner } from '@templates';
import { useAuthentication } from '@hooks';
import * as S from './Login.style';
import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';

export const LoginPage: React.FC = () => {
  const authenticate = useAuthentication();
  const handleSubmitLoginForm = (value: RequestAuthUser) => {
    authenticate.login(value);
  };
  return (
    <S.Container>
      <S.LoginContainer>
        <LoginBanner submitLoginForm={handleSubmitLoginForm} />
      </S.LoginContainer>
    </S.Container>
  );
};
