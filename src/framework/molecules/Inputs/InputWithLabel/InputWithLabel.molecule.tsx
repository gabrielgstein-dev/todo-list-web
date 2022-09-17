import React from 'react';

import { InputWithLabelProps } from './InputWithLabel.interface';

import { Input } from '@atoms';
import * as S from './InputWithLabel.style';

export const InputWithLabel: React.FC<InputWithLabelProps> = ({
  value,
  onChange,
  placeholder,
  label,
  disabled,
  style,
  name,
  type,
  errorMessage,
  ...props
}) => {
  return (
    <S.LabelContainer>
      {label}
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={style}
        name={name}
        type={type}
        hasError={!!errorMessage}
        {...props}
      />
      <S.ErrorLabel>{errorMessage}</S.ErrorLabel>
    </S.LabelContainer>
  );
};
