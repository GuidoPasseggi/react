// https://jsonplaceholder.typicode.com/
// Free fake API for testing and prototyping.

//react-icons.github.io/react-icons/icons?name=vsc
// npm install react-icons --save
//  TODO: los íconos se importan como si fueran componentes
import { VscBug, VscGlobe } from "react-icons/vsc";

// FIXME: esto es viejo, ahora es mejor usar ASYNC/AWAIT
export function Posts() {
  return (
    <div>
      <button
        onClick={() => {
          console.log("\n obteniendo datos de API 'posts'");
          fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
            res
              .json()
              .then((data) => console.log(data))
              .catch((err) => console.log(err))
          );
        }}
      >
        <h1>
          <VscBug />
          <VscGlobe />
          Traer datos desde API
        </h1>
      </button>
      <hr />
    </div>
  );
}
