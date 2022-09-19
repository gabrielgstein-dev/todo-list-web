import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    border: ${`1px solid ${theme.palette.primary.shade}`};

    padding-bottom: 1%;
  `}
`;

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    height: 5vh;
    background-color: ${theme.palette.primary.base};
    color: ${theme.palette.light.base};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const TitleContainer = styled.div`
  ${() => css`
    padding-left: 2%;

    flex: 15 1 auto;
  `}
`;

export const ActionContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;

    flex: 1 1 auto;
  `}
`;

export const EditButton = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    color: ${theme.palette.light.base};

    flex: 1 1 auto;
  `}
`;

export const DeleteButton = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    color: ${theme.palette.light.base};

    flex: 1 1 auto;
  `}
`;

export const TodoContainer = styled.div`
  ${() => css`
    padding-left: 2%;
  `}
`;

export const DoneContainer = styled.div`
  ${() => css`
    padding-left: 2%;
  `}
`;

export const StatusTitleContainer = styled.div`
  ${() => css`
    margin: 10px 0;
  `}
`;

export const TaskContainer = styled.div`
  ${() => css`
    padding-left: 4%;
  `}
`;

export const AddTaskContainer = styled.div`
  margin-top: 10px;
  padding: 5px 30px;
`;

export const BreakLineContainer = styled.div`
  margin-top: 5%;

  display: flex;
  justify-content: center;
`;

export const BreakLine = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.dark.tint};
  opacity: 0.3;
  width: 90%;
`;
