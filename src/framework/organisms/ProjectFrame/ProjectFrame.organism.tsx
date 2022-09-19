import { DoneTaskList, TodoTaskList } from '@molecules';
import { TaskCreator } from '@organisms';
import { useProjects } from '~/hooks';

import { ProjectFrameProps } from './ProjectFrame.interface';
import * as S from './ProjectFrame.style';

export const ProjectFrame: React.FC<ProjectFrameProps> = ({ project }: ProjectFrameProps) => {
  const projects = useProjects();
  const handleCreateTask = (taskName: string) => {
    projects.addTask({
      name: taskName,
      projectId: +project.id,
      done: false,
    });
  };

  return (
    <S.Container key={project.name}>
      <S.HeaderContainer>
        <S.TitleContainer>{project.name}</S.TitleContainer>
        <S.ActionContainer>
          <S.EditButton>E</S.EditButton>
          <S.DeleteButton>D</S.DeleteButton>
        </S.ActionContainer>
      </S.HeaderContainer>

      <S.TodoContainer>
        <S.StatusTitleContainer>To Do</S.StatusTitleContainer>
        <S.TaskContainer>
          <TodoTaskList taskList={project.taskList} />
        </S.TaskContainer>
      </S.TodoContainer>

      <S.DoneContainer>
        <S.StatusTitleContainer>Done</S.StatusTitleContainer>
        <S.TaskContainer>
          <DoneTaskList taskList={project.taskList} />
        </S.TaskContainer>
      </S.DoneContainer>

      <S.BreakLineContainer>
        <S.BreakLine />
      </S.BreakLineContainer>

      <S.AddTaskContainer>
        <TaskCreator onSubmitTask={handleCreateTask} />
      </S.AddTaskContainer>
    </S.Container>
  );
};
