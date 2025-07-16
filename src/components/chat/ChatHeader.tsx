import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChatroomStore } from '../../store/chatroomStore';

interface Props {
  roomId: string;
}

const ChatHeader: React.FC<Props> = ({ roomId }) => {
  const navigate = useNavigate();
  const chatroom = useChatroomStore((state) =>
    state.chatrooms.find((r) => r.id === roomId)
  );

  return (
    <div className="bg-white/90 backdrop-blur-md shadow-md rounded-xl px-4 py-3 mb-4 flex items-center justify-between">
      <button
        onClick={() => navigate('/dashboard')}
        className="text-blue-600 text-sm font-medium hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-base sm:text-lg font-semibold text-gray-800 text-center flex-1">
        {chatroom ? chatroom.title : (
          <span className="text-red-500">Chatroom not found</span>
        )}
      </h2>

      {/* Spacer for layout balance */}
      <div className="w-14" />
    </div>
  );
};

export default ChatHeader;
