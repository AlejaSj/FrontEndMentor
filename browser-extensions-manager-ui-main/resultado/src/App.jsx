import "./App.css";

import logo from "./assets/logo.svg";
import theme from "./assets/icon-moon.svg";
import themeDay from "./assets/icon-sun.svg";
import Card from "./components/Card";
import Logo from "./components/Logos";
import datos from "./assets/data.json";
import { useState, useEffect } from "react";

function App() {
  const [primerBoton, setPrimerBoton] = useState("1");
  const [tarjetas, setTarjetas] = useState(datos);
  const [tema,setTema] = useState(true)

  const temaCambiar = ()=>{
    setTema(prevTema=>!prevTema)
  }

  const botonPrecionado = (e) => {
    setPrimerBoton(e);
  };

  const datosActive = tarjetas.filter((t) => t.isActive);
  const datosInactive = tarjetas.filter((t) => !t.isActive);

  let datosFiltrados = tarjetas;
  if (primerBoton === "2") datosFiltrados = datosActive;
  else if (primerBoton === "3") datosFiltrados = datosInactive;

  const toggleActivo = (nombre) => {
    const actualizadas = tarjetas.map((t) =>
      t.name === nombre ? { ...t, isActive: !t.isActive } : t
    );
    setTarjetas(actualizadas);
  };

  const remover =(nombre)=>{
      setTarjetas(tarjetas.filter((t) => t.name !== nombre));
  }

   useEffect(() => {
    const body = document.body;

    if (tema) {
      body.classList.add('tema-claro-body');
      body.classList.remove('tema-oscuro-body');
    } else {
      body.classList.add('tema-oscuro-body');
      body.classList.remove('tema-claro-body');
    }

    return () => {
      body.classList.remove('tema-claro-body');
      body.classList.remove('tema-oscuro-body');
    };
  }, [tema]);

  return (
    <>
      <div className={`flex justify-between items-center w-full ${tema?"bg-white":"bg-[#2f364b]"} rounded-2xl shadow-md mb-15 h-16 px-5`}>
        <Logo color={tema?"#2f364b":"white"}/>
        <div onClick={temaCambiar} className="cursor-pointer">
          <img
            src={tema?theme:themeDay}
            alt=""
            className={`text-white h-10 rounded-xl p-3 ${tema?"bg-[#ededed]":"bg-[#545969]"} "`}
          />
        </div>
      </div>

      <div className="flex justify-between mb-5 max-lg:flex-col max-lg:items-center">
        <h1 className={`${tema?"text-[#2f364b] ":"text-[white] "} text-3xl font-bold`}>Extensions List</h1>
        <div className="flex gap-3">
          <div
            onClick={() => botonPrecionado("1")}
            className={`${
              primerBoton == "1" ? "selected " : ""
            }  ${tema ?"light":"dark "}  category rounded-3xl py-2 px-4`}
          >
            <p>All</p>
          </div>
          <div
            onClick={() => botonPrecionado("2")}
            className={`${
              primerBoton == "2" ? "selected " : ""
            } ${tema ?"light":"dark "} category   rounded-3xl py-2 px-4`}
          >
            <p>Active</p>
          </div>
          <div
            onClick={() => botonPrecionado("3")}
            className={`${
              primerBoton == "3" ? "selected " : ""
            } ${tema ?"light":"dark "} category   rounded-3xl py-2 px-4`}
          >
            <p>Inactive</p>
          </div>
        </div>
      </div>

      <main className={`grid grid-cols-3 gap-2 max-lg:grid-cols-1 `}>
        
        {datosFiltrados.map((tarjeta, index) => (
          <Card
            theme = {tema}
            key={tarjeta.name}
            logo={tarjeta.logo}
            description={tarjeta.description}
            titulo={tarjeta.name}
            activo={tarjeta.isActive}
            onToggle={() => toggleActivo(tarjeta.name)}
            onRemove= {() =>remover(tarjeta.name)}
          />
        ))}
      </main>
    </>
  );
}
export default App;
