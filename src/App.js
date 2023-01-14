import "./App.css";
import imagen from "./imagenes/imagen.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {


  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {

    setNumClics(numClics + 1);

  }



  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={imagen} alt="logo" />
      </div>

      <div className="contenedor-principal">

        <Contador
          numClics={numClics} />

        <Boton 
          texto="Clic" 
          esbotonclic={true} 
          manejarClic={manejarClic} />

        <Boton
          texto="Reiniciar"
          esbotonclic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
