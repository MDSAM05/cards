import React from 'react';

const TestCards = ({ fullName, userName, description, imge }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br justify-center items-center  from-gray-50 to-gray-300 flex justify-center items-start pt-50 px-4 font-sans antialiased">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <img 
              src={imge} 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{fullName}</h3>
              <p className="text-sm text-gray-600">{userName}</p>
            </div>
          </div>
          <p className="text-base text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestCards;