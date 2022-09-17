import styled, { css } from 'styled-components';

export const InputBorder = styled.div<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    border: ${hasError ? `1px solid ${theme.palette.danger.base}` : 'none'};
    border-radius: 6px;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.components.input}
    height: 6vh;
    width: 100%;
    outline: 0;
    font-size: 0.9vw;
  `}
`;
