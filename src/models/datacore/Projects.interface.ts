interface TaskList {
  name: string;
  done: boolean;
}

export interface ProjectsDatacore {
  name: string;
  taskList: TaskList[];
}
