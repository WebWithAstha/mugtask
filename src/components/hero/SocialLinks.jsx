import Image from 'next/image';
import React from 'react';

const SocialLinks = () => (
  <div className="flex md:gap-4 gap-4">
      <Image className='md:w-6 w-4' src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" alt="" />
      <Image className='md:w-6 w-4' src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="" />
      <Image className='md:w-6 w-4' src="https://cdn-icons-png.flaticon.com/512/1384/1384089.png" alt="" />
      <Image className='md:w-6 w-4' src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="" />
    </div>
);

export default SocialLinks;
