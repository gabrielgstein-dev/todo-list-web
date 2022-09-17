import React from 'react';

import { InputProps } from './Input.interface';
import * as S from './Input.style';

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  disabled,
  placeholder,
  style,
  name,
  type = 'text',
  hasError = false,
  onBlur,
}) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt);
  };
  return (
    <S.InputBorder hasError={hasError}>
      <S.Input
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        style={style}
        name={name}
        type={type}
        onBlur={onBlur}
      />
    </S.InputBorder>
  );
};
