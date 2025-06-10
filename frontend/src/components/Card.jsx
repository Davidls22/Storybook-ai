import React, { useState } from 'react';

const Card = ({ _id, name, prompt, generatedText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="rounded-xl group relative shadow-card hover:shadow-cardhover bg-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#6469ff] flex items-center justify-center text-white font-bold">
            {name[0].toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold text-[#222328]">{name}</h3>
            <p className="text-sm text-[#666e75]">Author</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-[#6469ff] mb-1">Prompt</h4>
            <p className="text-[#666e75] text-sm">{prompt}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-[#6469ff] mb-1">Story</h4>
            <p className="text-[#666e75] text-sm line-clamp-4">{generatedText}</p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(true)}
          className="mt-4 text-[#6469ff] text-sm font-medium hover:text-[#4f52cc] transition-colors"
        >
          Read full story
        </button>
      </div>

      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6469ff] flex items-center justify-center text-white font-bold">
                  {name[0].toUpperCase()}
                </div>
                <div>
                  <h3 className="font-semibold text-[#222328]">{name}</h3>
                  <p className="text-sm text-[#666e75]">Author</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-[#6469ff] mb-2">Prompt</h4>
                <p className="text-[#666e75]">{prompt}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-[#6469ff] mb-2">Story</h4>
                <p className="text-[#666e75] leading-relaxed">{generatedText}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
