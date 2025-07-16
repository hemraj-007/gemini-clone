import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 italic mt-3 ml-2">
      Gemini is typing
      <span className="flex space-x-1">
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
      </span>
    </div>
  );
};

export default TypingIndicator;
