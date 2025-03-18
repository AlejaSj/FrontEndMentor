import "./App.css";
import bgArriba from "./assets/bg-pattern-top.svg";
import bgAbajo from "./assets/bg-pattern-bottom.svg";
import bgCard from "./assets/bg-pattern-card.svg";
import profileImg from "./assets/image-victor.jpg";

function App() {
  return (
    <div>
      <img src={bgArriba} alt="" srcset="" className="bgTop" />
      <div className="container w-sm mx-auto bg-white rounded-xl shadow-lg mt-36">
        <div>
          <img src={bgCard} alt="" srcset=""  className="w-full rounded-t-xl" />
        </div>
        <div>
          <img src={profileImg} alt="" srcset="" className="profile-img" />
        </div>
        <h1 className="mt-15 font-bold text-xl">
          Victor Crest <span className="font-normal text-[#6a6f81]">26</span>
          </h1> 
        <p className="text-[#6a6f81]">London</p>
        <hr className="text-[#6a6f81] opacity-25 my-5" />
        <div className="flex justify-around">
          <div >
            <p className="font-bold text-xl">80K</p>
            <p className="text-[#6a6f81] text-[11px] tracking-widest">Followers</p>
          </div>
          <div>
            <p className="font-bold text-xl">803K</p>
            <p className="text-[#6a6f81] text-[11px]">Likes</p>
          </div>
          <div className="mb-6">
            <p className="font-bold text-xl">1.4K</p>
            <p className="tracking-wide text-[#6a6f81] text-[11px] tracking-widest">Photos</p>
          </div>
        </div>
      </div>
      <img src={bgAbajo} alt="" srcset="" className="bgBottom" />
    </div>
  );
}

export default App;
