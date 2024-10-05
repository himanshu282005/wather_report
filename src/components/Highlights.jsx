import React from 'react';

const Highlights = ({ title, value, unit }) => {
  return (
    <div className="bg-white/10 p-4 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg ease-in-out duration-300 flex flex-col justify-center items-center">
      <h2 className="text-white text-md mb-2">{title}</h2>
      <div className="flex items-end">
        <span className="text-white text-5xl font-bold">{value}</span>
        <span className="text-slate-300 text-2xl ml-1">{unit}</span>
      </div>
    </div>
  );
};

export default Highlights;
