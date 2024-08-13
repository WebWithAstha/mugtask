import React from 'react';

const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-8 flex justify-center items-center flex-col">
        <h1 className="text-[3.6vw] text-center font-bold dark:text-white">{title}</h1>
        {subtitle && <p className="text-sm w-[70%] text-center dark:text-gray-400 mt-2">{subtitle}</p>}
    </div>

);

export default SectionTitle;
