import logo from "./assets/logo.svg";
import illustration from "./assets/illustration-dashboard.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [correo,setCorreo] = useState("si");
  const inputRef = useRef(null);

  const esCorreoValido = (correo) => {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  };

  const manejarValidacion = () => {
    const correoIngresado = inputRef.current.value;

    if (esCorreoValido(correoIngresado)) {
      setCorreo("si")
      
    } else {
      setCorreo("no")
    }
  };

  return (
    <div className=" flex flex-col m-10 max-lg:w-[90%]">
      <div className="flex justify-center mb-5">
        <img src={logo} className="w-30" alt="" />
      </div>
      <h1 className="font-extralight mb-5 text-gray-500">
        We are launching <span className="font-bold text-black"> soon!</span>
      </h1>
      <p className="text-xl mb-10">Subscribe and get notified</p>
      <div className={`flex justify-center gap-6 max-lg:flex-col max-lg:w-full ${correo==="si"? "mb-15":"mb-2"}`}>
        <div className="flex flex-col lg:w-[30%]">
        <input ref={inputRef} type="text" className={`p-4 w-full rounded-4xl  border-1   ${correo==="si"? "border-gray-300":"border-red-500"} `} placeholder="Your email address "/>
        <p className={`${correo==="si"? "mb-0 hidden":"lg:mb-9 text-sm text-red-500"}`}>Please provide a valid email address</p>
        </div>
        <div className="lg:w-[12%] ">

        <button onClick={manejarValidacion} className=" p-4 w-full  bg-[#4f7df3] text-white rounded-4xl hover:bg-[#c2d3ff] cursor-pointer">Notify Me</button>
        </div>
      </div>
     

      <div className="flex justify-center">

      <img src={illustration} className="w-160 mb-5" alt="" />
      </div>
      <div>
        <div className="flex justify-center space-x-4 mb-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-[#c2d3ff] hover:text-blue-800"/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="text-[#c2d3ff] hover:text-blue-600"/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-[#c2d3ff] hover:text-pink-700"/>
        </a>
        </div>
        <div className="text-gray-500">&copy; Copyright Ping. All rights reserved.</div>
      </div>
    </div>
  );
}

export default App;
