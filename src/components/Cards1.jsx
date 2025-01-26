import React from 'react';

function Cards1() {
  const cardData = [
    {
      title: 'Brand Strategy',
      description: 'We help businesses define their unique brand message and branding positioning.',
      linkText: 'About Strategy',
      linkHref: '#',
    },
    {
      title: 'UI/UX Design',
      description: 'We create user-friendly designs that drive customer engagement and satisfaction.',
      linkText: 'Learn More',
      linkHref: '#',
    },
    {
      title: 'Digital Marketing',
      description: 'We craft marketing campaigns that help businesses reach their target audience effectively.',
      linkText: 'Discover Marketing',
      linkHref: '#',
    },
    {
        title: 'UI/UX Design',
        description: 'We create user-friendly designs that drive customer engagement and satisfaction.',
        linkText: 'Learn More',
        linkHref: '#',
      },
  
  ];

  return (
    <div className='h-[65vh]'>
          <div className="flex justify-between mt-15">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="card1 h-[45vh] w-[18vw] rounded-xl px-6 py-14 flex flex-col justify-between bg-[#F8F8F8] shadow-md hover:shadow-lg transition-shadow"
        >
          <h1 className="text-3xl font-semibold">{card.title}</h1>
          <p className="text-zinc-500">{card.description}</p>
          <a
            className="text-zinc-600 relative group"
            href={card.linkHref}
          >
            {card.linkText}
            <span
              className="absolute left-0 bottom-0 w-0 h-[2px] bg-zinc-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </div>
      ))}
    </div>
    
    </div>
  
  );
}

export default Cards1;