// import "./App.css";
import Presupuesto from "./components/Presupuesto";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
  console.log("Link del video: \n https://www.youtube.com/watch?v=j2-X0Pck9jk");
  console.log(
    "Desde el minuto 18 dejé de seguir al profesor exacto, \n tratando de replicar lo que el profe de ORT hace"
  );

  return (
    <div className='container mt-3'>
      <Presupuesto></Presupuesto>
      <Formulario></Formulario>
      <hr />
      <Lista></Lista>
    </div>
  );
}

export default App;
