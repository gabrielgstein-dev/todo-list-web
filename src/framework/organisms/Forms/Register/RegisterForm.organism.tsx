import React, { useState } from 'react';
import { Button, VariantButtonEnum } from '@atoms';
import { InputWithLabel } from '@molecules';
import { useForm } from '@hooks';

import { RegiserFormProps, RegisterInterface } from './RegisterForm.interface';

import * as S from './RegisterForm.style';
import { hasButtonDisabled } from './RegisterForm.logic';

export const RegisterForm: React.FC<RegiserFormProps> = ({
  onSubmit,
  action,
  buttonText = 'Cadastrar',
}) => {
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');
  const [values, setValues] = useForm<RegisterInterface>();

  const handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmationError('');
    setValues(evt);
  };

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();
    evt.preventDefault();
    onSubmit(values);
  };

  const handleBlurPasswordConfirmation = () => {
    if (values.password !== values.passwordConfirmation) {
      setPasswordConfirmationError('As senhas inseridas são diferentes');
    }
  };

  return (
    <S.FormContainer onSubmit={handleSubmit} action={action}>
      <S.InputFormContainer>
        <InputWithLabel
          label='E-mail'
          name='username'
          onChange={setValues}
          placeholder='Ex: exemplo@exemplo.com'
          value={values.username}
        />
      </S.InputFormContainer>

      <S.InputFormContainer>
        <InputWithLabel
          label='Senha'
          name='password'
          onChange={handleChangeInput}
          type='password'
          placeholder='Ex: 123@123'
          value={values.password}
        />
      </S.InputFormContainer>

      <S.InputFormContainer>
        <InputWithLabel
          label='Confrime a senha'
          name='passwordConfirmation'
          onChange={handleChangeInput}
          type='password'
          placeholder='Confirme a senha'
          value={values.passwordConfirmation}
          errorMessage={passwordConfirmationError}
          onBlur={handleBlurPasswordConfirmation}
        />
      </S.InputFormContainer>
      <S.ButtonContainer>
        <Button
          disabled={!hasButtonDisabled(values)}
          label={buttonText}
          variant={VariantButtonEnum.PRIMARY}
        />
      </S.ButtonContainer>
    </S.FormContainer>
  );
};
