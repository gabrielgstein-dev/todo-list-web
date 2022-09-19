import { selector } from 'recoil';

import { api } from '@service';

export const getAllProjectsQuery = selector({
  key: 'projects/selector/getAll',
  get: async () => {
    const response = await api.projects.getAll();
    return response;
  },
});
