import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;

  &:hover {
    & > span {
      display: block;
    }
  }
`;

export const CheckboxContainer = styled.div`
  padding: 5px 0;
  flex: 20 1 auto;
`;

export const ActionContainer = styled.span`
  flex: 1 1 auto;

  display: none;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
