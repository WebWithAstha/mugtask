import React from 'react';

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-white">{skill}</span>
      <span className="text-sm text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 relative rounded-full h-2">
      <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${level}%` }}></div>
      <span
          className="absolute  top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center border bg-zinc-50 border-orange-500 rounded-full shadow-lg transform -translate-x-1/2"
          style={{ left: level+"%" }} // Adjust positioning based on level
        ></span>
    </div>
  </div>
);

export default SkillBar;
