import React from "react";

function Card2() {
  let songs = [
    {
      songename: "Mahiya ve",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia adipisci animi debitis.",
    },
    {
      songename: "Mahiya ve",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia adipisci animi debitis.",
    },
    {
      songename: "Mahiya ve",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia adipisci animi debitis.",
    },
  ];
  const handleClickDownload = () => {console.log("Yes You Clicked it")}
  const handleMouseOver = () => {console.log("Aja Mere Bhai Or Meri Bahen")}
  return (
    <div className="w-full bg-green-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen place-items-center pt-5 pb-5">
      {songs.map((e, index) => (
        <div key={index} className="w-[250px] rounded bg-pink-200 p-4">
          <h1 className="font-semibold">{e.songename}</h1>
          <h5 className="font-thin mt-2">{e.description}</h5>
          <button
            onClick={handleClickDownload}
            onMouseOver={handleMouseOver}
            className="text-white bg-blue-500 text-sm px-3 py-1 mt-3 rounded transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-110"
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card2;
