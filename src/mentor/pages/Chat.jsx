
import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';

const MentorChat = () => {
  const [selectedMentee, setSelectedMentee] = useState(null);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef(null);
  
  // Mock data for mentees
  const mentees = [
    {
      id: 1,
      name: 'Jamie Chen',
      avatar: 'JC',
      online: true,
      lastActive: 'Just now',
      unread: 3,
      messages: [
        { id: 1, sender: 'mentee', text: 'Hello, I have a question about the React assignment', time: '10:30 AM' },
        { id: 2, sender: 'mentor', text: 'Sure, what do you need help with?', time: '10:32 AM' },
        { id: 3, sender: 'mentee', text: 'I\'m stuck with the state management part', time: '10:33 AM' },
        { id: 4, sender: 'mentee', text: 'Could you explain how to use useReducer with context?', time: '10:33 AM' },
        { id: 5, sender: 'mentee', text: 'I\'ve been trying to follow the documentation but I\'m getting confused', time: '10:34 AM' },
      ]
    },
    {
      id: 2,
      name: 'Alex Smith',
      avatar: 'AS',
      online: false,
      lastActive: '2 hours ago',
      unread: 0,
      messages: [
        { id: 1, sender: 'mentor', text: 'How\'s your progress on the UI Design project?', time: 'Yesterday' },
        { id: 2, sender: 'mentee', text: 'I\'ve completed the wireframes, working on the high-fidelity designs now', time: 'Yesterday' },
        { id: 3, sender: 'mentor', text: 'Great! Let me know if you need any feedback', time: 'Yesterday' },
      ]
    },
    {
      id: 3,
      name: 'Taylor Williams',
      avatar: 'TW',
      online: true,
      lastActive: '30 minutes ago',
      unread: 1,
      messages: [
        { id: 1, sender: 'mentee', text: 'I submitted my TypeScript assignment', time: 'Yesterday' },
        { id: 2, sender: 'mentor', text: 'I\'ll review it tomorrow', time: 'Yesterday' },
        { id: 3, sender: 'mentee', text: 'Any update on my assignment review?', time: '30 minutes ago' },
      ]
    },
    {
      id: 4,
      name: 'Jordan Taylor',
      avatar: 'JT',
      online: true,
      lastActive: '5 minutes ago',
      unread: 0,
      messages: [
        { id: 1, sender: 'mentee', text: 'Do you have time for a quick call today?', time: '1 hour ago' },
        { id: 2, sender: 'mentor', text: 'Sure, I\'m free at 3 PM', time: '55 minutes ago' },
        { id: 3, sender: 'mentee', text: 'Perfect, I\'ll send a calendar invite', time: '50 minutes ago' },
        { id: 4, sender: 'mentor', text: 'Sounds good!', time: '5 minutes ago' },
      ]
    },
    {
      id: 5,
      name: 'Robin Lee',
      avatar: 'RL',
      online: false,
      lastActive: '2 days ago',
      unread: 0,
      messages: [
        { id: 1, sender: 'mentor', text: 'Haven\'t heard from you in a while. How are you progressing with the Node.js course?', time: '3 days ago' },
        { id: 2, sender: 'mentee', text: 'Sorry for the late reply. I\'ve been busy with work. I\'ll catch up this weekend.', time: '2 days ago' },
      ]
    },
  ];
  
  // Filter mentees based on search
  const filteredMentees = mentees.filter(mentee => 
    mentee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedMentee, mentees]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!message.trim() || !selectedMentee) return;
    
    // In a real app, this would send the message to an API
    toast.success('Message sent');
    
    // For demo, update the local state
    const updatedMentees = mentees.map(mentee => {
      if (mentee.id === selectedMentee.id) {
        return {
          ...mentee,
          messages: [
            ...mentee.messages,
            { 
              id: mentee.messages.length + 1, 
              sender: 'mentor', 
              text: message, 
              time: format(new Date(), 'h:mm a') 
            }
          ]
        };
      }
      return mentee;
    });
    
    // Reset message input
    setMessage('');
    
    // Update selected mentee with new message
    const updatedSelectedMentee = updatedMentees.find(mentee => mentee.id === selectedMentee.id);
    setSelectedMentee(updatedSelectedMentee);
  };

  const handleStartNewConversation = () => {
    toast.info('New conversation form would open here');
  };

  return (
    <div className="h-[calc(100vh-13rem)] flex flex-col">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
        <button 
          onClick={handleStartNewConversation}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700 transition-colors"
        >
          <Icon icon="tabler:edit" className="h-5 w-5 mr-2" />
          New Message
        </button>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow overflow-hidden flex flex-col md:flex-row">
        {/* Sidebar with mentee list */}
        <div className="w-full md:w-1/3 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Icon 
                icon="tabler:search" 
                className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
              />
            </div>
          </div>
          
          <div className="overflow-y-auto h-[calc(100vh-20rem)]">
            {filteredMentees.map(mentee => (
              <div 
                key={mentee.id}
                onClick={() => setSelectedMentee(mentee)}
                className={`p-4 border-b border-gray-100 flex items-center cursor-pointer hover:bg-gray-50 ${
                  selectedMentee?.id === mentee.id ? 'bg-purple-50' : ''
                }`}
              >
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-medium">
                    {mentee.avatar}
                  </div>
                  {mentee.online && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                  )}
                </div>
                
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-900">{mentee.name}</h3>
                    <span className="text-xs text-gray-500">{mentee.lastActive}</span>
                  </div>
                  {mentee.messages.length > 0 && (
                    <p className="text-sm text-gray-600 truncate">
                      {mentee.messages[mentee.messages.length - 1].text}
                    </p>
                  )}
                </div>
                
                {mentee.unread > 0 && (
                  <div className="ml-2 bg-purple-600 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                    {mentee.unread}
                  </div>
                )}
              </div>
            ))}
            
            {filteredMentees.length === 0 && (
              <div className="p-4 text-center">
                <p className="text-gray-500">No conversations found</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {selectedMentee ? (
            <>
              {/* Chat header */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-medium">
                      {selectedMentee.avatar}
                    </div>
                    {selectedMentee.online && (
                      <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></div>
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">{selectedMentee.name}</h3>
                    <p className="text-xs text-gray-500">
                      {selectedMentee.online ? 'Online' : `Last active ${selectedMentee.lastActive}`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="text-gray-600 hover:text-gray-900 p-2">
                    <Icon icon="tabler:phone" className="h-5 w-5" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-2">
                    <Icon icon="tabler:video" className="h-5 w-5" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 p-2">
                    <Icon icon="tabler:dots-vertical" className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {selectedMentee.messages.map(msg => (
                    <div 
                      key={msg.id} 
                      className={`flex ${msg.sender === 'mentor' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.sender === 'mentee' && (
                        <div className="h-8 w-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-medium mr-2">
                          {selectedMentee.avatar}
                        </div>
                      )}
                      <div 
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          msg.sender === 'mentor' 
                            ? 'bg-purple-600 text-white rounded-tr-none' 
                            : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.sender === 'mentor' ? 'text-purple-100' : 'text-gray-500'}`}>
                          {msg.time}
                        </p>
                      </div>
                      {msg.sender === 'mentor' && (
                        <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium ml-2">
                          ME
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              {/* Message input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center">
                  <button 
                    type="button"
                    className="text-gray-600 hover:text-gray-900 p-2"
                  >
                    <Icon icon="tabler:paperclip" className="h-5 w-5" />
                  </button>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button 
                    type="submit"
                    disabled={!message.trim()}
                    className={`ml-2 p-2 rounded-full ${
                      message.trim() 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Icon icon="tabler:send" className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
              <Icon icon="tabler:message-circle" className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">No Conversation Selected</h3>
              <p className="text-gray-500 text-center max-w-md">
                Select a conversation from the list or start a new one to begin messaging with your mentees.
              </p>
              <button 
                onClick={handleStartNewConversation}
                className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Start New Conversation
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorChat;
