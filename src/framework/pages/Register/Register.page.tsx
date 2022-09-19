import React from 'react';

import { RegisterBanner } from '@templates';
import * as S from './Register.style';
import { useAuthentication } from '@hooks';
import { RequestRegisterUser } from '@models/datacore';

export const RegisterPage: React.FC = () => {
  const userHook = useAuthentication();

  const handleSubmitRegister = (registerFields: RequestRegisterUser) => {
    userHook.register(registerFields);
  };
  return (
    <S.Container>
      <S.RegisterContainer>
        <RegisterBanner submitRegisterForm={handleSubmitRegister} />
      </S.RegisterContainer>
    </S.Container>
  );
};
