import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-delay"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-delay"></div>
      </div>
    </div>
  );
};

export default Spinner;
