import React, { useState } from 'react';
import { useChatroomStore } from '../../store/chatroomStore';
import toast from 'react-hot-toast';
import { FiPlus } from 'react-icons/fi';

const CreateChatroomModal: React.FC = () => {
  const [title, setTitle] = useState('');
  const addChatroom = useChatroomStore((state) => state.addChatroom);

  const handleCreate = () => {
    if (!title.trim()) {
      toast.error('Chatroom title cannot be empty');
      return;
    }
    addChatroom(title.trim());
    toast.success('Chatroom created!');
    setTitle('');
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-3">
      <input
        type="text"
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
        placeholder="Enter new chatroom title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={handleCreate}
        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white px-5 py-3 rounded-lg shadow-md font-semibold"
      >
        <FiPlus className="text-lg" />
        <span>Create</span>
      </button>
    </div>
  );
};

export default CreateChatroomModal;
