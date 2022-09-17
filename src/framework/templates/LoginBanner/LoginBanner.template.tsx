import React from 'react';
import { FormLogin } from '@organisms';
import { Button, Paragraph, Title, VariantButtonEnum } from '@atoms';
import { LeftSideLoginProps } from './LoginBanner.interface';

import * as S from './LoginBanner.style';
import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';

export const LoginBanner: React.FC<LeftSideLoginProps> = ({
  buttonRegisterText = 'Cadastrar-se',
  buttonForgotPasswordText = 'Esqueci a senha',
  submitLoginForm,
}) => {
  const handleClickRegisterButton = () => {
    console.log('Register');
  };
  const handleClickForgotPasswordButton = () => {
    console.log('Forgot Password');
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
        <Button
          label={buttonRegisterText}
          onClick={handleClickRegisterButton}
          variant={VariantButtonEnum.SECONDARY}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};
