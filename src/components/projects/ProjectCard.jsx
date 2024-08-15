import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ image, title, description }) => (
  <div className="dark:bg-zinc-700 rounded-lg">
    <div className="w-full h-[36vh] overflow-hidden relative mb-2 bg-orange-200/[.5]">

    <Image src={image} alt={title} className="w-[60%] absolute left-0 z-[2] translate-x-[10%] translate-y-[6%] top-0 object-contain mb-4" />
    <Image src={image} alt={title} className="w-[60%] absolute right-0 -translate-x-[10%]  bottom-0 object-contain mb-4" />
    </div>
    <h3 className="text-sm text-orange-500 mt-4 leading-none mb-1">{title}</h3>
    <p className="font-bold text-md">{description}</p>
  </div>
);

export default ProjectCard;
