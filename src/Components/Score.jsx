import React, { useState } from "react";

function Score() {
  const [banned, setBanned] = useState(false);
  const [run, setRun] = useState(0);
  const [voter, setVoter] = useState({ name: "Sourabh", canVote: "false" });
  return (
    <div className="w-full bg-pink-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen place-items-center">
      <div className="p-3 text-xl font-semibold text-white bg-cyan-500 w-[200px] rounded-md transition-all duration-300 ease-in-out hover:bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:scale-110">
        <h1>Score</h1>
        <button
          onClick={() => setBanned(!banned)}
          className={`px-2 py-1 mt-2 rounded-md text-xl text-white transition-all duration-300 ease-in-out hover:scale-110 ${
            banned === true ? "bg-green-700" : "bg-red-700"
          }`}
        >
          <h2>{banned.toString()}</h2>
        </button>
        <button
          onClick={() => setRun((prev) => prev + 1)}
          className="mt-2 px-4 py-2 bg-orange-600 rounded-md transition-all duration-300 ease-in-out hover:scale-110"
        >
          Click Me : {run}
        </button>
        <button className={`px-3 py-1 mt-2 rounded-md text-xs ${voter.canVote === true ?'bg-green-500':'bg-red-500'}`}>Voter Name: {
          voter.name
        } <br/> Can Vote: {voter.canVote.toString()}</button>
        <button onClick={()=>setVoter({...voter, canVote: !voter.canVote})} className="px-2 py-1 rounded bg-white text-black mt-2 text-xs">Change</button>
      </div>
    </div>
  );
}

export default Score;
