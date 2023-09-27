import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  /* ANTES DE IMPLEMENTAR CONTEXTO (pasábamos como props todo):
  - App está un nivel encima de ambos TaskForm y TaskList
  - App recibe la lista de tasks y se la pasa como props a TaskList
  - En cambio, en vez de hacer lo mismo con TaskForm, interactúa distinto:
  le manda mediante prop (ver abajo) a TaskForm la función "createTask", TaskForm le devuelve una respuesta/data, y usando esta data App actualiza la lista de tasks
  
  
  CON CONTEXT:
  - Está centralizado el estado en el context, que está un nivel por encima incluso de APP (abarca todo digamos), tonces todas las funciones+variables se pueden pasar desde el CONTEX hasta cualquier otro componente
  */
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-5'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
