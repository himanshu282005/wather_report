import React from 'react';
const Temperature = ({ setCity }) => {
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Enter your city"
        className="bg-white/20 border border-slate-300 text-white placeholder-slate-200 p-2 rounded-md w-60 focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
        onChange={handleCityChange}
        defaultValue="New Delhi"
      />
      <div className="text-white mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </div>
    </div>
  );
};

export default Temperature;
