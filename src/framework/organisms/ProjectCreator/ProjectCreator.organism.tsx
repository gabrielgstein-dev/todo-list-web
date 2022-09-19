import { Button, Input, VariantButtonEnum } from '@atoms';
import { useState } from 'react';

import { ProjeectCreatorProps } from './ProjectCreator.interface';

import * as S from './ProjectCreator.style';

export const ProjectCreator: React.FC<ProjeectCreatorProps> = ({
  onSubmitProject,
}: ProjeectCreatorProps) => {
  const [value, setValues] = useState('');

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();
    evt.preventDefault();
    onSubmitProject(value);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      Criar novo projeto
      <S.InputFormContainer>
        <Input
          name='taskName'
          onChange={(evt) => setValues(evt.target.value)}
          placeholder='Escreva aqui o nome do projeto'
          value={value}
        />
      </S.InputFormContainer>
      <S.ButtonContainer>
        <Button label={'Adicionar Projeto'} variant={VariantButtonEnum.PRIMARY} type={'submit'} />
      </S.ButtonContainer>
    </S.FormContainer>
  );
};
