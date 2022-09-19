import React, { useState } from 'react';
import { Button, VariantButtonEnum, Input } from '@atoms';

import { TaskCreatorProps } from './TaskCreator.interface';

import * as S from './TaskCreator.style';

export const TaskCreator: React.FC<TaskCreatorProps> = ({ onSubmitTask }) => {
  const [value, setValues] = useState('');

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();
    evt.preventDefault();
    onSubmitTask(value);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.InputFormContainer>
        <Input
          name='taskName'
          onChange={(evt) => setValues(evt.target.value)}
          placeholder='Escreva aqui o nome da tarefa'
          value={value}
        />
      </S.InputFormContainer>
      <S.ButtonContainer>
        <Button label={'Adicionar'} variant={VariantButtonEnum.PRIMARY} type={'submit'} />
      </S.ButtonContainer>
    </S.FormContainer>
  );
};
