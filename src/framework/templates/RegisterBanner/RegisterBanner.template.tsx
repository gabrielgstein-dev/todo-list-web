import React from 'react';
import { RegisterForm } from '@organisms';
import { RegisterBannerTemplate } from './RegisterBanner.interface';

import * as S from './RegisterBanner.style';
import { RequestRegisterUser } from '@models/datacore';

export const RegisterBanner: React.FC<RegisterBannerTemplate> = ({ submitRegisterForm }) => {
  const handleSubmitForm = (values: RequestRegisterUser) => {
    submitRegisterForm(values);
  };

  return (
    <S.Container>
      <S.Image alt={'Bolttech'} src='/bolttech_logo.png' />

      <S.FormContainer>
        <RegisterForm onSubmit={handleSubmitForm} />
      </S.FormContainer>
    </S.Container>
  );
};
