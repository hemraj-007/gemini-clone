import React from 'react';
import { useChatroomStore } from '../../store/chatroomStore';
import ChatroomCard from './ChatroomCard';

interface Props {
  search: string;
}

const ChatroomList: React.FC<Props> = ({ search }) => {
  const chatrooms = useChatroomStore((state) => state.chatrooms);

  const filtered = chatrooms.filter((room) =>
    room.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!filtered.length) {
    return (
      <div className="text-center text-gray-500 text-lg font-medium mt-6">
        🚫 No chatrooms found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {filtered.map((room) => (
        <ChatroomCard key={room.id} room={room} />
      ))}
    </div>
  );
};

export default ChatroomList;
