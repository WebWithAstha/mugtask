import React from 'react';
import icons from '../../assets/images/vector1.jpg'; 

const ServiceCard = ({ icon, title, description }) => (
  <div className="dark:bg-zinc-700 bg-zinc-100 p-4 rounded-lg">
    <img src={icons} alt={title} className="w-16 h-16 mx-auto mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="dark:text-gray-400 text-sm">{description}</p>
  </div>
);

export default ServiceCard;
