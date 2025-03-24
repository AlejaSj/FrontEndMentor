import "./App.css";
import bgDesktop from "./assets/bg-desktop.svg";
import bgMobile from "./assets/bg-mobile.svg";
import logo from "./assets/logo.svg";
import img from "./assets/illustration-mockups.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <img
        className="absolute top-0 left-0 w-full h-[100vh] -z-2 max-lg:hidden"
        src={bgDesktop}
        alt=""
        srcset=""
      />
            <img
        className="absolute top-0 left-0 w-full h-full -z-2 lg:hidden"
        src={bgMobile}
        alt=""
        srcset=""
      />
      <img src={logo} alt=""/>
      <div className="flex my-10 max-lg:flex-col">
        <div className="lg:w-[50%]">
          <img className="w-[100%]" src={img} alt="" />
        </div>
        <div className="flex flex-col lg:ml-20 lg:w-[42%] max-lg:text-center">
          <h1 className="max-lg:pt-10 lg:pt-20 lg:px-25">
            Build The Community Your Fans Will Love
          </h1>
          <p className="py-9 max-lg:px-15 lg:px-25 text-lg">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.{" "}
          </p>
          <div className="flex px-25 max-lg:justify-center ">
            <button className="rounded-full shadow-2xl w-70 hover:bg-[#e882e8] bg-white text-[#e882e8] text-xl font-bold p-5 hover:text-white cursor-pointer">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="flex max-lg:justify-center mt-16 justify-end pr-10">
        <FontAwesomeIcon
          icon={faFacebookF}
          size="2x"
          className="mx-2 text-white hover:text-[#e882e8] cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          className="mx-2 text-white hover:text-[#e882e8] cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          className="mx-2 text-white hover:text-[#e882e8] cursor-pointer"
        />
      </div>
    </>
  );
}

export default App;
