import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return(
  <div className="dark:bg-zinc-700 bg-zinc-100 p-4 rounded-lg">
    <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="dark:text-gray-400 text-sm">{description}</p>
  </div>
  )
};

export default ServiceCard;
