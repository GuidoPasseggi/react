import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [unidades, setUnidades] = useState(0);
  const [precio, setPrecio] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const producto = { nombre, unidades: parseInt(unidades), precio: parseFloat(precio) };
    console.log(producto);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Nombre
        </label>
        <input
          type='text'
          className='form-control'
          onChange={(event) => setNombre(event.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Unidades
        </label>
        <input
          type='number'
          className='form-control'
          onChange={(event) => setUnidades(event.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='' className='form-label'>
          Precio
        </label>
        <input
          type='number'
          className='form-control'
          onChange={(event) => setPrecio(event.target.value)}
        />
      </div>
      <input type='submit' className='btn btn-info' value='Enviar' />
    </form>
  );
}

export default Formulario;
