import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useMessageStore } from '../store/messageStore';
import type { Message } from '../store/messageStore'
import ChatHeader from '../components/chat/ChatHeader';
import MessageList from '../components/chat/MessageList';
import MessageInput from '../components/chat/MessageInput';
import TypingIndicator from '../components/chat/TypingIndicator';

// stable empty-array fallback
const EMPTY_MESSAGES: Message[] = [];

const Chatroom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const addMessage = useMessageStore((state) => state.addMessage);
  // subscribe to the room’s messages (or get the same EMPTY_MESSAGES ref)
  const messages = useMessageStore(
    (state) => state.messages[id!] ?? EMPTY_MESSAGES
  );

  const simulateAIResponse = useCallback(
    (roomId: string, userMessage: string) => {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        addMessage(roomId, {
          id: crypto.randomUUID(),
          sender: 'gemini',
          content: `You said: "${userMessage}" 🤖`,
          timestamp: new Date().toISOString(),
        });
      }, 1000);
    },
    [addMessage]
  );

  // scroll when the count actually changes
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  // optional debug
  useEffect(() => {
    console.log('Messages updated:', messages.length);
  }, [messages.length]);

  if (!id) return <p>Chatroom ID is missing.</p>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">
      <ChatHeader roomId={id} />

      <div className="flex-1 overflow-y-auto mb-2 flex flex-col gap-3 px-2 sm:px-4 py-2 max-h-[75vh] custom-scroll">
        <MessageList chatroomId={id} />
        {typing && <TypingIndicator />}
        <div ref={scrollRef} />
      </div>

      <MessageInput
        chatroomId={id}
        onUserSend={(text) => simulateAIResponse(id, text)}
      />
    </div>
  );
};

export default Chatroom;
