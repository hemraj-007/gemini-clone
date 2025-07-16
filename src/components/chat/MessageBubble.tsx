import React from 'react';
import type { Message } from '../../store/messageStore';

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs p-2 rounded-lg shadow ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-300 text-gray-900'
        }`}
      >
        {message.image && (
          <img
            src={message.image}
            alt="uploaded"
            className="rounded-md mb-2 max-h-40 object-cover"
          />
        )}
        {message.content && <p>{message.content}</p>}
        <span className="text-xs opacity-60 block mt-1 text-right">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
