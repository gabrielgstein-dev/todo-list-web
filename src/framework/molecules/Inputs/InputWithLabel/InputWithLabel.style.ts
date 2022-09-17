import styled, { css } from 'styled-components';

export const LabelContainer = styled.label`
  ${({ theme }) => css`
    width: 100%;
    font-size: 0.8vw;
    font-weight: 600;
    color: ${theme.palette.dark.tint};
  `}
`;

export const ErrorLabel = styled.label`
  ${({ theme }) => css`
    width: 100%;
    font-size: 0.8vw;
    font-weight: 600;
    margin-left: 5px;
    color: ${theme.palette.danger.base};
  `}
`;
