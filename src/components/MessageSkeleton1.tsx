import React from 'react';

const MessageSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse p-4 border rounded bg-white shadow mb-2">
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
    </div>
  );
};

export default MessageSkeleton;
