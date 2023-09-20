import PropTypes from "prop-types"; // ES6

// "text" es un "props" que viene desde "index.jsx"
// para asegurarnos que el prop text sea siempre un string, instalamos la    prop-types
// npm install --save prop-types
// https://www.npmjs.com/package/prop-types
export function Button({ text, name = "Usuario" }) {
  return (
    <button>
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

//// otra forma de pasar un valor por defecto a las props (la otra es la de acá arriba "name = 'Usuario'")
// Button.defaultProps = {
//   name: "Some user"
// }
