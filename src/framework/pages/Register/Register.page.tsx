import React from 'react';

import { RegisterBanner } from '@templates';
import * as S from './Register.style';

export const RegisterPage: React.FC = () => {
  const handleSubmitRegister = () => {
    console.log('register');
  };
  return (
    <S.Container>
      <S.RegisterContainer>
        <RegisterBanner submitRegisterForm={handleSubmitRegister} />
      </S.RegisterContainer>
    </S.Container>
  );
};
