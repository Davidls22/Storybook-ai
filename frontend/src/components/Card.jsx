import React from 'react';

const Card = ({ _id, name, prompt, generatedText }) => (
  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover bg-gray-200">
    <div className="w-full h-full rounded-xl flex justify-center items-center">
      <p className="text-center text-gray-600 p-4">{generatedText}</p>
    </div>
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto">{prompt}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
          <p className="text-white text-sm">{name}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
