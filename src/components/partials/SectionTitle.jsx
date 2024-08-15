import React from 'react';

const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-8 flex justify-center items-center flex-col">
        <h1 className="md:text-[3.6vw] text-3xl md:mb-8 mb-2 text-center font-bold dark:text-white">{title}</h1>
        {subtitle && <p className="text-sm md:w-[70%] text-center dark:text-gray-400 mt-2">{subtitle}</p>}
    </div>

);

export default SectionTitle;
