import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';

export interface Chatroom {
  id: string;
  title: string;
  createdAt: string;
}

interface ChatroomStore {
  chatrooms: Chatroom[];
  allChatrooms: Chatroom[];
  addChatroom: (title: string) => void;
  deleteChatroom: (id: string) => void;
  filterChatrooms: (query: string) => void;
}

export const useChatroomStore = create<ChatroomStore>()(
  persist(
    (set, get) => ({
      chatrooms: [],
      allChatrooms: [],
      addChatroom: (title) => {
        const newRoom: Chatroom = {
          id: uuid(),
          title,
          createdAt: new Date().toISOString(),
        };
        const updatedList = [newRoom, ...get().allChatrooms];
        set({ allChatrooms: updatedList, chatrooms: updatedList });
      },
      deleteChatroom: (id) => {
        const updated = get().allChatrooms.filter((r) => r.id !== id);
        set({ allChatrooms: updated, chatrooms: updated });
      },
      filterChatrooms: (query) => {
        const filtered = get().allChatrooms.filter((r) =>
          r.title.toLowerCase().includes(query.toLowerCase())
        );
        set({ chatrooms: filtered });
      },
    }),
    { name: 'chatroom-storage' }
  )
);
