// También es común trabajar con los estilos de manera
import "./task-styles.css";

export function TaskCard({ ready }) {
  return (
    <div className='card'>
      <h1>Mi primera Card</h1>
      {/* <span style={ready ? { background: "green" } : { background: "red" }}> */}
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "ready es TRUE" : "ready es FALSE"}
      </span>
    </div>
  );
}
