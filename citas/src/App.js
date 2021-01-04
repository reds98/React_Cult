import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Citas";

function App() {
  //Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  const [citas, guardarCitas] = useState(citasIniciales);

  //Use effect para realizar para realizar ciertas operaciones cuado el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  //Funcion que tome las citas actuales y agregue la nueva

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
    //Funcion que elimina una cita por su id
  };
  const eliminarCita = (id) => {
    console.log("Eliminar la cita");
    console.log(id);
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //Mnesaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus Citas";
  console.log(citas.length);
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
