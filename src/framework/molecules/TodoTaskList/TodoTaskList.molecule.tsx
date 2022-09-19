import { Taskline } from '@molecules';

import { TodoTaskListProps } from './TodoTaskList.interface';
import * as S from './TodoTaskList.style';

export const TodoTaskList: React.FC<TodoTaskListProps> = ({ taskList }: TodoTaskListProps) => {
  return (
    <S.Container>
      {taskList
        .filter((task) => !task.done)
        .map((task) => (
          <S.LineContainer key={task.name}>
            <Taskline task={task} />
          </S.LineContainer>
        ))}
    </S.Container>
  );
};
