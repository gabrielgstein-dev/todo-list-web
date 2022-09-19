import { useSetRecoilState } from 'recoil';
import { api } from '@service';

import { app, projects } from '@recoil';
import { ProjectsDatacore, RequestToggleTaskDatacore } from '~/models/datacore';
import { RequestRegisterTaskDatacore } from '~/models/datacore/RequestRegisterTask.interface';

export const useProjects = () => {
  const setLoading = useSetRecoilState(app.appLoading);
  const setProjects = useSetRecoilState(projects.projects);

  const getAll = async () => {
    try {
      setLoading(true);
      const response = await api.projects.getAll();
      setLoading(false);
      setProjects(response);
    } catch (error) {
      console.error(error);
    }
  };

  const addProject = async (data: string) => {
    try {
      setLoading(true);
      const response = await api.projects.addProject(data);
      await getAll();
      setLoading(false);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const addTask = async (data: RequestRegisterTaskDatacore) => {
    try {
      setLoading(true);
      const response = await api.projects.addTask(data);
      await getAll();
      setLoading(false);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTask = async (data: RequestToggleTaskDatacore) => {
    try {
      setLoading(true);
      const response = await api.projects.toggleTask(data);
      await getAll();
      setLoading(false);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const deleteTask = async (data: number) => {
    try {
      setLoading(true);
      const response = await api.projects.deleteTask(data);
      await getAll();
      setLoading(false);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getAll,
    addProject,
    addTask,
    toggleTask,
    deleteTask,
  };
};
