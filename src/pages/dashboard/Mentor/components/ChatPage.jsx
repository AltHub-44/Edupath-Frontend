import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useRef, useEffect } from "react";
import yusuf from "@/assets/yusuf.png";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hi! I'm really confused about what to study in university. I like science but I'm not sure if medicine is right for me.",
      sender: "user",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      id: "2",
      text: "Hey! That's completely normal. Science offers so many career paths beyond medicine have you explored fields like biomedical engineering, environmental science, or even research?",
      sender: "mentor",
      timestamp: new Date(Date.now() - 1000 * 60 * 4),
    },
    {
      id: "3",
      text: "Not really! I only ever hear about medicine. How do I know what's right for me?",
      sender: "user",
      timestamp: new Date(Date.now() - 1000 * 60 * 3),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    setTimeout(() => {
      const mentorMessage = {
        id: (Date.now() + 1).toString(),
        text: "That's a great question. I'd recommend exploring your interests through internships or shadowing professionals in different fields. Also, consider taking introductory courses in various scientific disciplines to see what resonates with you.",
        sender: "mentor",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, mentorMessage]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="bg-white p-4 flex items-center gap-3 ">
        <div className="flex items-center gap-3">
          <img src={yusuf} className="rounded-full h-14 w-14" alt="" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Mr. Yusuf Adeola
            </h2>
            <p className="text-sm text-green-600">Online</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2  bg-gray50">
        <div className="space-y-4 pb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-xl inline-block max-w-[80%] lg:max-w-[60%]  ${
                  message.sender === "user"
                    ? "bg-blue300 text-white rounded-tr-none"
                    : "bg-white text-gray-800 rounded-tl-none"
                }`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form
        onSubmit={handleSendMessage}
        className="sticky bottom-0 bg-white flex items-center gap-2 p-3 shadow-md"
      >
        <input
          placeholder="Write a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 outline-none"
        />
        <button
          type="submit"
          className="p-2 rounded-full bg-blue300 text-white hover:bg-eduBlue-600 transition-colors"
          disabled={!newMessage.trim()}
        >
          <Icon icon="fa:send-o" className="text-lg" />
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
