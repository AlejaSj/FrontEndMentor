import calculator from "./assets/icon-calculator.svg";
import karma from "./assets/icon-karma.svg";
import supervisor from "./assets/icon-supervisor.svg";
import teamBuilder from "./assets/icon-team-builder.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="my-17 ">
        <div className="w-[90%] max-w-150 mx-auto my-10 ">
          <h2 className="text-3xl font-extralight">
            Reliable, efficient delivery
          </h2>
          <h1 className="font-bold text-3xl m-2">Powered by Technology </h1>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-4 gap-7 max-lg:flex flex-col max-lg:w-[75%] max-lg:mx-auto">
          <div className="col-start-2 row-span-2 h-55 border-[#ea5353] border-t-4 shadow-xl rounded-lg p-8 text-left">

            <div>
              <h3 className="font-medium text-xl mb-1">Team Builder</h3>
            </div>
            <div>
              <p>
                Scans our talent network to create the optimal team for your
                project
              </p>
            </div>
            <div className="w-full flex justify-end"><img src={teamBuilder} alt=""/></div>
          </div>

          <div className=" col-start-1 row-span-2 row-start-2  border-[#45d3d3] border-t-4 shadow-xl rounded-lg p-8 text-left">
          <div>
              <h3 className="font-medium text-xl mb-1">Supervisor</h3>
            </div>
            <div>
              <p>Monitors activity to identifyproject roadblocks</p>
            </div>
            <div className="w-full flex justify-end"><img src={supervisor} alt=""/></div>
          </div>

          <div className="col-start-3 row-span-2 row-start-2  border-[#45d3d3] border-t-4 shadow-xl rounded-lg p-8 text-left">
          <div>
              <h3 className="font-medium text-xl mb-1">Calculator</h3>
            </div>
            <div>
              <p>
                Uses data from past projects to provide better delivery
                estimates
              </p>
            </div>
            <div className="w-full flex justify-end"><img src={calculator} alt=""/></div>
          </div>

          <div className=" col-start-2 row-span-2  border-[#fcaf4a] border-t-4 shadow-xl rounded-lg p-8 text-left">
          <div>
              <h3 className="font-medium text-xl mb-1">Karma</h3>
            </div>
            <div>
              <p>Regularly evaluates our talent to ensure quality</p>
            </div>
            <div className="w-full flex justify-end"><img src={karma} alt=""/></div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
