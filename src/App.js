import React, { useCallback, useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  //Definir State
  const [presupuesto, guardarProsupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardatGastos] = useState([]);

  //Agregar un nuevo gasto
  const agregarNuevoGasto = gasto => {
    guardatGastos([
      ...gastos,
      gasto
    ])
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostarPregunta ? (
            <Pregunta
              guardarProsupuesto={guardarProsupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  agregarNuevoGasto={agregarNuevoGasto}
                />
              </div>
              <div className="one-half column">
                <Listado 
                  gastos={gastos}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
