export interface TaskDatacore {
  name: string;
  done: boolean;
}

export interface RequestTaskDatacore extends TaskDatacore {
  projectId: string;
}
