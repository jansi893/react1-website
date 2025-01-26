import React from "react";

const cardData = [
  {
    bgColor: "#F1F5F9",
    category: "Services",
    title: "Our Approach to Branding.",
    buttonText: "About Oliv",
    buttonColor: "black",
  },
  {
    bgColor: "#EDE9FE",
    category: "Marketing",
    title: "Crafting Unique Campaigns.",
    buttonText: "Explore More",
    buttonColor: "#6B21A8",
  },
  {
    bgColor: "#FEF9C3",
    category: "Design",
    title: "Innovative Design Solutions.",
    buttonText: "Learn Design",
    buttonColor: "#CA8A04",
  },
];

function Card2() {
  return (
    <div className="cards flex gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`h-[50vh] flex flex-col items-start justify-between p-10 w-[17vw] rounded-xl`}
          style={{ backgroundColor: card.bgColor }}
        >
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-gray-400">{card.category}</h1>
            <h1 className="text-3xl text-gray-800">{card.title}</h1>
          </div>
          <button
            className={`px-4 py-2 border rounded-full text-white duration-300`}
            style={{ backgroundColor: card.buttonColor }}
          >
            {card.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card2;