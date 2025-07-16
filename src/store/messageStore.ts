import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  image?: string;
}

interface MessageStore {
  messages: Record<string, Message[]>;
  addMessage: (roomId: string, message: Message) => void;
}

export const useMessageStore = create<MessageStore>()(
  devtools(
    persist(
      (set) => ({
        messages: {},
        addMessage: (roomId: string, message: Message) => {
          set((state) => ({
            messages: {
              ...state.messages,
              [roomId]: [...(state.messages[roomId] || []), message]
            }
          }));
        }
      }),
      {
        name: 'message-storage', // localStorage key
      }
    ),
    {
      name: 'message-store-devtools',
    }
  )
);
