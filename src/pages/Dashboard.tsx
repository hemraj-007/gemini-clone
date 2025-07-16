import React, { useState, useEffect } from 'react';
import ChatroomList from '../components/dashboard/ChatroomList';
import CreateChatroomModal from '../components/dashboard/CreateChatroomModal';
import SearchInput from '../components/dashboard/SearchInput';
import MessageSkeleton from '../components/MessageSkeleton';

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-8">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl mx-auto p-6 sm:p-10 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">Your Chatrooms</h1>

        <SearchInput onSearch={setSearchTerm} />
        <CreateChatroomModal />

        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <MessageSkeleton key={idx} />
            ))}
          </div>
        ) : (
          <ChatroomList search={searchTerm} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
