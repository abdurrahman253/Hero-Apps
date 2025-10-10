import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-16 h-16 border-8 border-gray-200 border-t-[#632EE3] border-l-purple-400 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;