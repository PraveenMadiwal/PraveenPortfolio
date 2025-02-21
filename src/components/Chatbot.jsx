// Chatbot Component (Chatbot.jsx)
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef(null);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput('');

        try {
            const response = await axios.post('http://localhost:5000/api/chatbot/message', { message: input });
            const botMessage = { sender: 'bot', text: response.data.botResponse };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    // Scroll to latest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Handle Enter & Shift+Enter in input box
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevents new line
            sendMessage();
        }
    };

    // Toggle chatbot & disable background scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    }, [isOpen]);

    return (
        <div className="fixed right-6 bottom-6 flex flex-col items-end z-50">
            {/* Background Blur Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-55 backdrop-blur-md z-40"
                    onClick={() => setIsOpen(false)} // Close when clicking outside
                ></div>
            )}

            {/* Chatbot Button with Icon */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="relative z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center">
                <span className="material-symbols-rounded text-2xl">chat_bubble</span>
            </button>

            {/* Chatbot Window */}
            {isOpen && (
                <div className="fixed bottom-20 right-10 w-80 h-96 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-lg p-4 flex flex-col z-50">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-2 text-gray-300 hover:text-gray-500"
                    >
                        ✖
                    </button>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
                        {messages.map((msg, index) => (
                            <div key={index} className={`p-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <span className={`inline-block px-3 py-1 rounded-lg max-w-[75%] break-words ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}>
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Field */}
                    <div className="flex items-center gap-2 mt-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 p-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type a message..."
                        />
                        <button 
                            onClick={sendMessage} 
                            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-all">
                            <span className="material-symbols-rounded text-xl">send</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
