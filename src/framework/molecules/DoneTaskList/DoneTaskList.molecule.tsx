import { Taskline } from '@molecules';

import { DoneTaskListProps } from './DoneTaskList.interface';

export const DoneTaskList: React.FC<DoneTaskListProps> = ({ taskList }: DoneTaskListProps) => {
  return (
    <>
      {taskList
        .filter((task) => task.done)
        .map((task) => (
          <Taskline key={task.name} task={task} />
        ))}
    </>
  );
};
