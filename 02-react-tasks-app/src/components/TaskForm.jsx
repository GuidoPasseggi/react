/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const value = useContext(TaskContext); // value tiene toda la data y funciones del "value" en TaskContext (ie:  "tasks", "deleteTask", "createTask")
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
    // TODO: ^_ aparte de vaciar el valor del state (como acá arriba con los 2 setXXX), no olvidar darle la propiedad value al input y al textarea como hice más abajo
  };

  return (
    <div className='max-w-md mx-auto'>
      <form className='bg-slate-800 p-10 mb-4' action='' onSubmit={handleSubmit}>
        <h1 className='text-2xl font-bold text-gray-200 mb-3'>Crea tu tarea</h1>
        <input
          className='bg-slate-300 p-3 w-full mb-2  placeholder:italic placeholder-gray-500'
          placeholder='Escribe tu tarea'
          type='text'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <br />

        <textarea
          className='bg-slate-300 p-3 w-full mb-2  placeholder:italic placeholder-gray-500'
          placeholder='Escribe la descripción de tu tarea'
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className='bg-indigo-700 px-3 py-1 text-white rounded-md hover:bg-indigo-500 border-2 border-gray-400'>
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
