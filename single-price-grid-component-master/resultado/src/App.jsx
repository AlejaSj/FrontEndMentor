import "./App.css";

function App() {
  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-2 h-[70vh] min-w-[880px] w-[45vw] shadow-2xl min-h-[560px] max-lg:flex max-lg:flex-col max-lg:min-w-[500px] my-20">
        <div className="col-span-2 text-left rounded-t-lg bg-white p-15 ">
          <h1 className="text-[#3ac7c5] text-4xl font-bold">Join our community</h1>
          <h2 className="text-[#c0df34] text-2xl mt-7 mb-4">30-day, hassle-free money back guarantee</h2>
          <p className="text-[#98a6bd] text-xl">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className="bg-[#2ab2af] lg:rounded-bl-lg   p-10 text-left ">
          <h2 className="text-2xl font-bold ">Monthly Subscription</h2>
          <div className="flex  items-center my-4">
            <p className="text-4xl font-bold mr-4" >$29</p>
            <p className="text-[#c6cdd8] ">per month</p> 
          </div>
          <p className="text-xl">Full access for less than $1 a day</p>
          <div className="w-full flex justify-center">

          <button className="cursor-pointer w-[90%] rounded-lg  font-bold shadow-xl bg-[#c0df34] h-14 my-10">Sign Up</button>
          </div>
        </div>
        <div className="bg-[#3ac7c5] max-lg:rounded-b-lg rounded-br-lg p-10 text-left ">
          <h2 className="text-2xl font-bold mb-4">Why Us</h2>
          <p className=" text-lg">Tutorials by industry experts </p>
          <p>Peer &amp; expert code review</p>
          <p>Coding exercises</p>
          <p>Access to our GitHub repos</p>
          <p>Community forum</p>
          <p>Flashcard decks</p>
          <p>New videos every week</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
