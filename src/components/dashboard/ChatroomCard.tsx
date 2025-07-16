import React from 'react';
import { useChatroomStore } from '../../store/chatroomStore';
import type { Chatroom } from '../../store/chatroomStore';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi'; // modern delete icon

const ChatroomCard: React.FC<{ room: Chatroom }> = ({ room }) => {
  const deleteChatroom = useChatroomStore((state) => state.deleteChatroom);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteChatroom(room.id);
    toast.success('Chatroom deleted');
  };

  return (
    <div
      className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-xl p-4 cursor-pointer border border-gray-200 flex flex-col justify-between group"
      onClick={() => navigate(`/chatroom/${room.id}`)}
    >
      <div>
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors truncate">
          {room.title}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Created on {new Date(room.createdAt).toLocaleString()}
        </p>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent navigation
            handleDelete();
          }}
          className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 transition-colors"
        >
          <FiTrash2 className="text-base" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default ChatroomCard;
