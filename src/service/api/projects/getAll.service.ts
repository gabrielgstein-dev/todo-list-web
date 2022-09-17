import { ProjectsDatacore } from '@models/datacore';
import { callApiBaseAsync } from '../_base';
const endpoint = '/auth';

const allProjects: ProjectsDatacore[] = [
  {
    name: 'Project 1',
    taskList: [
      {
        name: 'First task',
        done: false,
      },
      {
        name: 'Secound task',
        done: false,
      },
      {
        name: 'Third task',
        done: false,
      },
    ],
  },
  {
    name: 'Project 2',
    taskList: [
      {
        name: 'First task',
        done: false,
      },
      {
        name: 'Secound task',
        done: false,
      },
      {
        name: 'Third task',
        done: false,
      },
    ],
  },
];

export const getAll = async () => {
  return {
    data: allProjects,
  };
  // return callApiBaseAsync(`${endpoint}`, {
  //   title: 'AUTH API - loginApiService',
  //   method: 'POST',
  //   headers: new Headers(),
  //   body: {
  //     email: data.username,
  //     senha: data.password,
  //   },
  // });
};
