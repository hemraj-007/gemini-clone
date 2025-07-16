import React from 'react';

const MessageSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse flex items-start gap-4 px-4 py-3 rounded-md bg-white dark:bg-gray-800 shadow-sm">
      {/* Avatar placeholder */}
      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700" />

      {/* Message content placeholder */}
      <div className="flex-1 space-y-3">
        <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
  );
};

export default MessageSkeleton;
