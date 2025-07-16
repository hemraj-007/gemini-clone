import React from 'react';
import { useMessageStore } from '../../store/messageStore';
import type { Message } from '../../store/messageStore';
import MessageBubble from './MessageBubble';

interface Props {
  chatroomId: string;
}

const EMPTY_MESSAGES: Message[] = [];

const MessageList: React.FC<Props> = ({ chatroomId }) => {
  const messages = useMessageStore(
    (state) => state.messages[chatroomId] ?? EMPTY_MESSAGES
  );

  return (
    <>
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
    </>
  );
};

export default MessageList;
