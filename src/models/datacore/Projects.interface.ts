export interface TaskList {
  id: number;
  name: string;
  done: boolean;
}

export interface ProjectsDatacore {
  id: string;
  name: string;
  taskList: TaskList[];
}
