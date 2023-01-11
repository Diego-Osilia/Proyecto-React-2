import "./App.css";
import imagen from "./imagenes/imagen.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";

function App() {
  const manejarClic = () => {
    console.log("Clic");
  };

  const reiniciarContador = () => {
    console.log("Reiniciar");
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={imagen} alt="logo" />
      </div>

      <div className="contenedor-principal">

        <Contador
          numClics="5" />

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
