import React from 'react';

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="relative">
      <div className="w-8 h-8 bg-[#6469ff] rounded-full animate-ping"></div>
      <div className="absolute top-0 left-0 w-8 h-8 bg-[#6469ff] rounded-full opacity-75"></div>
      <div className="absolute top-0 left-0 w-8 h-8 bg-[#6469ff] rounded-full opacity-50"></div>
      <div className="absolute top-0 left-0 w-8 h-8 bg-[#6469ff] rounded-full opacity-25"></div>
    </div>
  </div>
);

export default Loader;
