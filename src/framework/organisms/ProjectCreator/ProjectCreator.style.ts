import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.palette.light.base};
  padding: 5%;
  border-radius: 5px;

  width: 100%;
`;
export const InputFormContainer = styled.div`
  margin-bottom: 2%;
  width: 70%;
`;

export const ButtonContainer = styled.div`
  width: 70%;
`;
