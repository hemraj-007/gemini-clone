import React, { useState } from "react";
import { useMessageStore } from "../../store/messageStore";
import { Paperclip, Send, X } from "lucide-react";

const MessageInput: React.FC<{
  chatroomId: string;
  onUserSend: (text: string) => void;
}> = ({ chatroomId, onUserSend }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const addMessage = useMessageStore((state) => state.addMessage);

  const handleSend = () => {
    if (!text.trim() && !image) return;

    const msg = {
      id: crypto.randomUUID(),
      content: text,
      sender: "user" as const,
      timestamp: new Date().toISOString(),
      image: image || undefined,
    };

    addMessage(chatroomId, msg);
    onUserSend(text);
    setText("");
    setImage(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
   <div className="px-3 py-2 bg-white shadow-inner">

      {image && (
        <div className="relative w-fit max-w-xs">
          <img
            src={image}
            alt="preview"
            className="rounded-lg max-h-40 border"
          />
          <button
            onClick={() => setImage(null)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-xl">
        <label className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
          <Paperclip className="w-5 h-5 text-gray-600" />
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </label>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Type a message..."
          className="flex-1 outline-none bg-transparent px-2 text-sm"
        />

        <button
          onClick={handleSend}
          disabled={!text.trim() && !image}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
