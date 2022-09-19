/* eslint-disable react/prop-types */
import { Checkbox } from '@atoms';
import { useProjects } from '@hooks';

import { TaskLineProps } from './Taskline.interface';
import * as S from './Taskline.style';

export const Taskline: React.FC<TaskLineProps> = ({ task }) => {
  const projects = useProjects();
  const handleCheckTask = (value: boolean) => {
    projects.toggleTask({
      id: task.id,
      done: value,
    });
  };

  const hadnleDeleteTask = () => {
    projects.deleteTask(task.id);
  };

  return (
    <S.Container>
      <S.CheckboxContainer>
        <Checkbox label={task.name} checked={task.done} onChange={handleCheckTask} />
      </S.CheckboxContainer>

      <S.ActionContainer>
        <S.DeleteButton onClick={hadnleDeleteTask}>D</S.DeleteButton>
      </S.ActionContainer>
    </S.Container>
  );
};
