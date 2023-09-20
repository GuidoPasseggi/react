// Es un archivo .JSX, el profe usa .JS con código de JSX dentro, pero yo lo cambié a JSX para que me tome los emmet de HTML

// importamos la bibliioteca de react
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

//ES6 modules (SIN "export default"):
import { Greeting, UserCard } from "./Greeting";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Posts } from "./Posts";

//ES6 modules (CON "export default"[Product] y SIN "export default" [Navbar dentro de Product]"):
import Product, { Navbar } from "./Product";

//Class component:
import { SaludarClassComponent } from "./SaludarClassComponent";

////////////////////////////////////////////////////////////////////////////////////////////
const root = ReactDOM.createRoot(document.getElementById("root"));

// FIXME: a modo de ejemplo de HOOKS, hacemos un componente dentro de este index (y no en un jsx aparte)
function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>STATE #1</h1>
      <h2>
        Componente <strong style={{ color: "red" }}>COUNTER</strong> <br /> (dentro de index.jsx)
      </h2>
      <h3>Counter: {counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 10);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 10);
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        reset
      </button>
      <hr />
    </div>
  );
}

// 2do ejemplo de HOOKS, tamb es un componente dentro brutamente
// el useState setéa y modifica el state Y el useEffect chequea cambios
function Mensaje() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    console.log("render");
  }, []);
  // TODO:
  // * [] es para que el useEffect solo se ejecute una vez (al inicio)
  // * podríamos en vez de dejarlo como [] poner dentro el nombre de la variable que quisieramos que dispare el useEffect() nuevamente ante cambios, éso en el caso de tener por ejemplo un solo componente combinando Mensaje+Counter con sus respectivos states dentro, y que use effect solo se dispare si la variable "counter" se modifica //// <--- DEPENDENCIAS

  return (
    <div>
      <h1>STATE #2</h1>
      <h2>
        Componente <strong style={{ color: "blue" }}>MENSAJE</strong> <br /> (dentro de index.jsx)
      </h2>
      <input
        type='text'
        onChange={(e) => {
          setMensaje(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert("El mensaje en state es: " + mensaje);
        }}
      >
        Save
      </button>
      <hr />
    </div>
  );
}

// https://robohash.org/ <---- para generar imágenes aleatorias (tipo avatar)
const users = [
  {
    id: 1,
    name: "User_1",
    image: "https://robohash.org/user1",
  },

  {
    id: 2,
    name: "User_2",
    image: "https://robohash.org/user2",
  },
];

const handleChange = (e) => console.log(e.target.value);

root.render(
  <>
    <Counter />
    <Mensaje />

    {users.map((user, idx) => {
      return (
        <div key={idx}>
          <p>esto itera una suerte de JSON dentro de INDEX.JSX (no es un componente)</p>
          <p>{user.name}</p>
          <img src={user.image} alt='' />
          <hr />
        </div>
      );
    })}
    <Posts />
    <SaludarClassComponent />
    <TaskCard ready={true} />
    <Button text='Click me'></Button>
    <Button text='Pay'></Button>
    <Button text='Go to' name='José'></Button>
    <UserCard
      name='Roberto Rey'
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Calle Falsa", city: "Springfield" }}
      greet={function () {
        alert("Hello");
      }}
    />
    <Greeting title='Title_1' name='Name_1' />
    <input id='hola' onChange={handleChange} />
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("clickeaste en Send del formulario");
      }}
    >
      <hr />
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form>
    <Product />
    <Navbar />
  </>
);

console.log("Link al video del tuto: https://youtu.be/rLoWMU4L_qE \n".repeat(5));
