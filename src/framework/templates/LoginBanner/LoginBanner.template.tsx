import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormLogin } from '@organisms';
import { Button, VariantButtonEnum } from '@atoms';
import { LogginBannerTemplate } from './LoginBanner.interface';

import * as S from './LoginBanner.style';
import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';

export const LoginBanner: React.FC<LogginBannerTemplate> = ({
  buttonRegisterText = 'Cadastrar-se',
  submitLoginForm,
}) => {
  const handleClickRegisterButton = () => {
    console.log('Register');
  };

  const handleSubmitForm = (values: RequestAuthUser) => {
    submitLoginForm(values);
  };

  return (
    <S.Container>
      <S.Image alt={'Bolttech'} src='/bolttech_logo.png' />

      <S.FormContainer>
        <FormLogin onSubmit={handleSubmitForm} />
      </S.FormContainer>

      <S.ButtonContainer>
        <NavLink to={'/register'}>
          <Button
            label={buttonRegisterText}
            onClick={handleClickRegisterButton}
            variant={VariantButtonEnum.SECONDARY}
          />{' '}
        </NavLink>
      </S.ButtonContainer>
    </S.Container>
  );
};
