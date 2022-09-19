import { atom } from 'recoil';
import { ProjectsDatacore } from '@models/datacore';

export const projects = atom<ProjectsDatacore[]>({
  key: 'projects/all',
  default: [] as ProjectsDatacore[],
});
