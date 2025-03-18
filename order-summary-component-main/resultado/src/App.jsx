import "./App.css";
import imagen from "./assets/icon-music.svg";
import background from "./assets/illustration-hero.svg";

function App() {

  return (
    <>
      <div className="background"></div>
      <div className=" w-md mx-auto bg-white flex flex-col items-center justify-center rounded-2xl shadow-lg ">
        <div className="w-full">
          <img className="w-full rounded-t-2xl" src={background} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center p-10">


        <h1 className="text-3xl font-bold">Order Summary</h1>
        <p className="text-[#7280a7] text-lg text-center my-6">
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </p>

        <div className="w-full p-4 rounded-md flex items-center justify-around ">
          <img 
            src={imagen}
            alt="icon-music"
            className=" w-10 h-10"
            />
          <div className="flex">
            <div className="text-left">
              <h2 className="text-lg font-bold">Annual Plan</h2>
              <p className="text-gray-500">
                $59.99/year
              </p>
            </div>
          </div>
          <button className="text-underlined text-blue-500 change">
            Change
          </button>
            </div>
        </div>
        <button className="w-3/4 h-12  font-bold text-white rounded-xl shadow-2xl boton">
          Proceed to Payment 
        </button>
        <div className=" font-bold text-gray-400 m-4 mb-10 hover:text-[#1f2f56] cursor-pointer">  

        Cancel Order
        </div>
      </div>
    </>
  );
}

export default App;
