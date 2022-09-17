import React from 'react';
import { Button, VariantButtonEnum } from '@atoms';
import { InputWithLabel } from '@molecules';
import { useForm } from '@hooks';
import { UserAuthentication } from '@models/dataview';

import { FormLoginProps } from './FormLogin.interface';

import * as S from './FormLogin.style';

export const FormLogin: React.FC<FormLoginProps> = ({
  onSubmit,
  action,
  buttonLoginText = 'Entrar',
}) => {
  const [values, setValues] = useForm<UserAuthentication>();

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();
    evt.preventDefault();
    onSubmit(values);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit} action={action}>
      <S.InputFormContainer>
        <InputWithLabel
          label='E-mail'
          name='email'
          onChange={setValues}
          placeholder='Digite aqui'
          value={values.username}
        />
      </S.InputFormContainer>

      <S.InputFormContainer>
        <InputWithLabel
          label='Senha'
          name='password'
          onChange={setValues}
          type='password'
          placeholder='Digite aqui'
          value={values.password}
        />
      </S.InputFormContainer>
      <S.ButtonContainer>
        <Button label={buttonLoginText} variant={VariantButtonEnum.PRIMARY} />
      </S.ButtonContainer>
    </S.FormContainer>
  );
};
