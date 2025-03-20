import card from "./assets/drawers.jpg";
import profile from "./assets/avatar-michelle.jpg";
import pinteres from "./assets/icon-pinterest.svg";
import twiter from "./assets/icon-twitter.svg";
import facebook from "./assets/icon-facebook.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [click, setClick] = useState(false);

  const cambio = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="container mx-auto flex h-100 bg-white w-[80%] rounded-lg shadow-lg max-lg:flex-col max-lg:h-auto lg:min-w-200">
        <div className="w-[100%] rounded-l-lg max-lg:rounded-t-lg">
          <img
            src={card}
            alt=""
            className="max-lg:rounded-t-lg lg:rounded-l-lg w-[100%] h-[100%] "
          />
        </div>
        <div>
          <h1 className="mx-10 mt-10 mb-5  text-[#48556a] max-lg:text-2xl  text-3xl font-semibold">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="mx-10 text-[#6d7f97] mt-5 text-[17px]">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.{" "}
          </p>

          <div className={`flex justify-around items-center mt-10 rounded-b-lg  ${click ? "max-lg:bg-[#48556a]" : "max-lg:bg-white"}`}>

            {/* CLICK */}
            <div className= {`flex justify-around items-center align-center lg:hidden h-25 w-60 ${click ? "" : "hidden"}`}>
              <p className=" text-xl tracking-[0.3rem] uppercase text-[#9eafc2]">
                Share
              </p>
              <img className="w-8" src={facebook} alt="" />
              <img className="w-8" src={twiter} alt="" />
              <img className="w-8" src={pinteres} alt="" />
            </div>

            <div className="flex gap-20 items-center">
              <div className={`flex m-5 items-center  ${click ? "max-lg:hidden" : ""} `}>
                <div>
                  <img src={profile} alt="" className="w-15 rounded-full" />
                </div>
                <div className="flex flex-col ml-5">
                  <p className="text-[#6d7f97] font-bold text-lg">
                    Michelle Appleton
                  </p>
                  <p className="text-[#9eafc2]">28 Jun 2020</p>
                </div>
              </div>

              <div onClick={cambio} className=" group cursor-pointer relative bg-[#ecf2f8] p-3 hover:bg-[#6E8098] rounded-full transition flex justify-between ">
                <div
                  className={`max-lg:hidden absolute -top-15 left-1/2 -translate-x-1/2 bg-[#48556a] text-white text-sm px-3 py-2 rounded opacity-0 transition duration-300 min-w-55 h-10 ${click ? "opacity-100" : "hidden"
                  }`}
                >
                  <div className="flex justify-around items-center align-center">
                    <p className="tracking-[0.3rem] uppercase text-[#9eafc2]">
                      Share
                    </p>
                    <img src={facebook} alt="" />
                    <img src={twiter} alt="" />
                    <img src={pinteres} alt="" />
                  </div>
                  <div className=" absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-[#48556a]"></div>
                </div>
                <svg
                  
                  className="text-[#6E8098] group-hover:text-[#ecf2f8] cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                >
                  <path
                    fill="currentColor"
                    d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
