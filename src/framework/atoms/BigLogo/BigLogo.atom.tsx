import React from 'react';

import * as S from './BigLogo.style';

export const BigLogo: React.FC = () => {
  return (
    <S.Container>
      <S.Image alt={'BOLTTECH LOGO'} src='/bolttech_logo.png' />
    </S.Container>
  );
};
