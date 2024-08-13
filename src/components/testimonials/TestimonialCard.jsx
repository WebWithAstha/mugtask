import React from 'react';

const TestimonialCard = ({ image, name, quote }) => (
  <div className="dark:bg-zinc-700 bg-zinc-200 p-4 rounded-lg text-center">
    <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
    <p className="dark:text-gray-400 mb-2">"{quote}"</p>
    <h3 className="text-xl font-bold">{name}</h3>
  </div>
);

export default TestimonialCard;
