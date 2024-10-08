import Link from 'next/link';
import React from 'react';

const Button = ({ text, link }) => (
  <Link href={link ? link :''} 
      className="inline-block md:text-sm text-xs bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
    >
      {text}
  </Link>
);

export default Button;
