/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks"; // usamos un alias para evitar conflictos de nombres de variables: {tasks as data}

// doble export, sin export default
// luego importamos ambos (TaskContext + TaskContextProvider) en "main.jsx"
// _1er export:
// almacena los datos
export const TaskContext = createContext();

// _2do export:
// es el componente
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  // cuando carga el componente le asigna "data" al state
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask({ title, description }) {
    let uniqueNumber = new Date().getTime(); // para generar ID (ojo: no sirve si se genera en el mismo milisegundo milliseconds since 1st Jan. 1970)
    const newTask = [...tasks, { id: uniqueNumber, title, description }];
    console.log(
      `NUEVA TASK CREADA \nID: ${uniqueNumber} \nTítulo: ${title}\nDescripción: ${description}`
    );
    setTasks(newTask);
  }

  function deleteTask(taskId) {
    console.log("TASK ELIMINADA. ID: " + taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          deleteTask,
          createTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}

// export default TaskContext;
