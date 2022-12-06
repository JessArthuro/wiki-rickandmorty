import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <section className="container text-white">
      <h1>Msj de bienvenida</h1>
      <Link to="/characters">Personajes</Link>
      <Link to="/episodes">Episodios</Link>
      <Link to="/locations">Ubicaciones</Link>
    </section>
  );
}

export default Welcome;
