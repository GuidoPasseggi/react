/* eslint-disable react/prop-types */

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// task lo recibe como prop, y no se puede pasar desde el contexto (TaskContext) porque el taskList lo está iterando con un .map
// el deleteTask sí lo puedo traer desde el contexto
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <h1 className='text-gray-400 text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-100'>{task.description}</p>
      <button
        className='bg-zinc-300 px-2 py-1 rounded-md mt-4 text-gray-800 hover:bg-zinc-100'
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
