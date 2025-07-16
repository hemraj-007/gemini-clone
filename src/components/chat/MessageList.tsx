import React from 'react';
import { useMessageStore } from '../../store/messageStore';
import type { Message } from '../../store/messageStore';
import MessageBubble from './MessageBubble';

interface Props {
  chatroomId: string;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

const EMPTY_MESSAGES: Message[] = [];

const MessageList: React.FC<Props> = ({ chatroomId, scrollRef }) => {
  const messages = useMessageStore(
    (state) => state.messages[chatroomId] ?? EMPTY_MESSAGES
  );

  return (
    <div className="flex flex-col gap-3 px-2 sm:px-4 py-2 max-h-[75vh] overflow-y-auto custom-scroll">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      <div ref={scrollRef} />
    </div>
  );
};

export default MessageList;
