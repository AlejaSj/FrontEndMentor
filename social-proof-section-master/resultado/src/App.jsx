import "./App.css";
import bgtop from "./assets/bg-pattern-top-desktop.svg";
import bgbottom from "./assets/bg-pattern-bottom-desktop.svg";
import star from "./assets/icon-star.svg";
import profile1 from "./assets/image-colton.jpg";
import profile2 from "./assets/image-irene.jpg";
import profile3 from "./assets/image-anne.jpg";

function App() {
  return (
    <div>
      <img src={bgtop} alt="" className="bgtop" />
      <div className="flex mt-30 max-sm:flex-col max-sm:mt-30">
        <div className="w-[43%] max-sm:w-[100%]">
          <h1 className="font-bold text-[3.2rem] max-sm:text-[2rem] max-sm:text-center">10,000+ of our users love our products.</h1>
          <p className="my-10 max-sm:text-center">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="max-sm:mx-0 mx-20 my-10">
          <div className="flex gap-10 items-center bg-[#f7f2f7] w-94 rounded-md p-4 justify-left max-sm:gap-3 max-sm:p-2  max-sm:flex-col max-sm:justify-center max-sm:w-[100%]">
            <div className="flex gap-1">
              <img src={star} alt="" className="w-[17px] h-[16px]" />
              <img src={star} alt="" className="w-[17px] h-[16px]" />
              <img src={star} alt="" className="w-[17px] h-[16px]" />
              <img src={star} alt="" className="w-[17px] h-[16px]" />
              <img src={star} alt="" className="w-[17px] h-[16px]" />
            </div>

            <p className="font-bold ">Rated 5 Stars in Reviews</p>
          </div>
          <div className="flex gap-10 items-center bg-[#f7f2f7] w-94 rounded-md py-3 p-4 justify-left mx-6 my-5 max-sm:gap-3 max-sm:p-2  max-sm:flex-col max-sm:justify-center max-sm:mx-0 max-sm:w-[100%]">
            <div className="flex gap-1 ">
              <img src={star} alt="" className="w-[17px] h-[16px]" />
              <img src={star} alt="" className="w-[17px] h-[16px]" />
              <img src={star} alt="" className="w-[17px] h-[16px]" />
              <img src={star} alt="" className="w-[17px] h-[16px]" />
              <img src={star} alt="" className="w-[17px] h-[16px]" />
            </div>
            <p className="font-bold "> Rated 5 Stars in Report Guru</p>
          </div>
          <div className="flex gap-10 items-center bg-[#f7f2f7] w-94 rounded-md py-3 p-4 justify-left mx-12 my-5 max-sm:gap-3 max-sm:p-2  max-sm:flex-col max-sm:justify-center max-sm:mx-0 max-sm:w-[100%]">
            <div className="flex gap-1">
              <img src={star} alt="" className="w-[17px] h-[16px]" />
              <img src={star} alt="" className="w-[17px] h-[16px]" />
              <img src={star} alt="" className="w-[17px] h-[16px]" />
              <img src={star} alt="" className="w-[17px] h-[16px]" />
              <img src={star} alt="" className="w-[17px] h-[16px]" />
            </div>
            <p className="font-bold ">Rated 5 Stars in BestTech</p>
          </div>
        </div>
      </div>
      <div className=" flex max-sm:flex-col gap-10 justify-center mt-2 ">
        <div className="bg-[#502050] h-[300px] text-[#fff] p-5 rounded-md">
          <div className="flex gap-5 items-center rounded-md">
            <div>
              <img src={profile1} alt="" className="rounded-full" />
            </div>
            <div>
              <h2 className="font-bold">Colton Smith</h2>
              <p className="text-[#ee68a4]">Verified Buyer</p>
            </div>
          </div>
          <div className="mt-4">
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </div>
        </div>
        <div className="bg-[#502050] text-[#fff] p-5 translate-y-8 rounded-md">
          <div className="flex gap-5 items-center">
            <div>
              <img src={profile2} alt="" className="rounded-full" />
            </div>
            <div>
              <h2 className="font-bold">Irene Roberts</h2>
              <p className="text-[#ee68a4]">Verified Buyer</p>
            </div>
          </div>
          <div className="mt-4">
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </div>
        </div>
        <div className="bg-[#502050] text-[#fff] p-5 translate-y-16 rounded-md">
          <div className="flex gap-5 items-center">
            <div>
              <img src={profile3} alt="" className="rounded-full"  />
            </div>
            <div>
              <h2 className="font-bold">Anne Wallace </h2>
              <p className="text-[#ee68a4]">Verified Buyer</p>
            </div>
          </div>
          <div className="mt-4">
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </div>
        </div>
      </div>
      <img src={bgbottom} alt="" srcset="" className="bgbottom" />
    </div>
  );
}

export default App;
