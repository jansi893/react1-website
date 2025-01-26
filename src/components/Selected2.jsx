import React from 'react';

const data = [
  {
    img: "https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b981e34f347cacdc73b6_project-01-thumb.webp",
    title: "Invision Studio",
    buttonText: "Marketing",
  },
  {
    img: "https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b96d86c0c985079d8d60_project-02-thumb.webp",
    title: "Creative Design",
    buttonText: "Branding",
  },
  {
    img: "https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b953a2c1a5706f63bbe1_project-03-thumb.webp",
    title: "Modern Art",
    buttonText: "Design",
  },
  {
    img: "https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b943f334e17d7007a0ea_project-04-thumb.webp",
    title: "Creative Design",
    buttonText: "Branding",
  },
];

function Selected2() {
  return (
    <div className="grid grid-cols-2 gap-10 p-5">
      {data.map((item, index) => (
        <div
          key={index}
          className="box h-[80vh] w-full rounded-lg shadow-md overflow-hidden relative"
        >
          {/* Image Section */}
          <div className="img-part overflow-hidden h-[80%] relative">
            <img
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-150"
              src={item.img}
              alt={item.title}
            />
          </div>

          {/* Text Section */}
          <div className="info flex justify-between items-center p-5 bg-white">
            <h1 className="text-xl text-zinc-500">{item.title}</h1>
            <button className="px-5 py-1.5 border text-zinc-700 rounded-full hover:bg-black hover:text-white duration-300">
              {item.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Selected2;