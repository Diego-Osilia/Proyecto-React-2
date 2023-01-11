import React from "react";
import "../styles/Boton.css";

function Boton({ texto, esbotonclic, manejarClic }) {
  return (
    <button
      className={esbotonclic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}>

      {texto}
    </button>
  );
}

export default Boton;
