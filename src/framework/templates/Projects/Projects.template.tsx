import { ProjectFrame, ProjectCreator } from '@organisms';
import { projects } from '@recoil';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useProjects } from '~/hooks';
import { ProjectsDatacore } from '~/models/datacore';

import * as S from './Projects.style';

export const ProjectTemplate: React.FC = () => {
  const projectList: ProjectsDatacore[] = useRecoilValue(projects.projects);
  const project = useProjects();

  const handleCreateProject = (projectName: string) => {
    project.addProject(projectName);
  };

  useEffect(() => {
    project.getAll();
    // eslint-disable-next-line no-debugger
    debugger;
  }, []);

  return (
    <S.Container>
      <S.ProjectFrameContainer>
        {projectList.map((project) => (
          <S.CardContainer key={project.name}>
            <ProjectFrame project={project} />
          </S.CardContainer>
        ))}

        <S.ProjectCreatorContainer>
          <ProjectCreator onSubmitProject={handleCreateProject} />
        </S.ProjectCreatorContainer>
      </S.ProjectFrameContainer>
    </S.Container>
  );
};
