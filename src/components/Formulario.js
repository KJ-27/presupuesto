import React, { useState } from "react";
import Error from "./Error";
import shortId from 'shortid';

const Formulario = ({agregarNuevoGasto}) => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  //Agregar gastos
  const agregarGasto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === null) {
      guardarError(true);
      return;
    }
    guardarError(false);

    //Contruir el Gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortId.generate()
    }

    //Pasar el gasto al componente principal
    agregarNuevoGasto(gasto);

    //resetar fomr
    guardarNombre("");
    guardarCantidad("");
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>

      {error ? (
        <Error mensaje="Ambos campos son obigatorios o Presupuesto Incorrecto" />
      ) : null}

      <div className="campo">
        <label>Nombre del Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;
