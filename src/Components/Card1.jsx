import React from "react";

function Card1() {
  let cards = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fHww",
      name: "Amazon",
      description: "Hi I am Amazon Owned By Jeff Beos",
      instock: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Netflix",
      description: "Hi I am Netflix an American Companey",
      instock: false
    },
    {
      image:
        "https://images.unsplash.com/photo-1594025149461-6338fc34e3f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amlvfGVufDB8fDB8fHww",
      name: "JioHotstar",
      description: "Hi I am JioHotstar, I am a Indian Content Provider",
      instock: true
    },
  ];
  return (
    <div className="w-full bg-yellow-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 pt-5 pb-5 lg:min-h-screen">
      {cards.map((e, index) => (
        <div
          key={index}
          className="w-[250px] bg-red-200 rounded-lg overflow-hidden"
        >
          <div className="w-full h-3/5 bg-blue-200">
            <img className="w-full h-full object-cover" src={e.image} alt="" />
          </div>
          <div className="p-2">
            <h1 className="font-semibold">{e.name}</h1>
            <h5 className="font-thin mt-2">{e.description}</h5>
            <button className={`text-white text-sm px-3 py-1 mt-3 rounded ${e.instock ? 'bg-green-700' : 'bg-red-600'}`}>
                {e.instock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card1;

// From This Code We Learned Components, Components Reusability and Conditional Redndering.