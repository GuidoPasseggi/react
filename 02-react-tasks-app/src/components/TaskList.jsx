/* eslint-disable react/prop-types */

import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  // console.log(tasks);
  if (tasks.length === 0) {
    return (
      <div>
        <h1 className='text-gray-200 text-3xl font-bold'>No hay tareas aún</h1>
      </div>
    );
  }
  return (
    // FIXME: notar que en JSX las funciones usan siempre "()" en vez de "{}", como en este ".map"
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
