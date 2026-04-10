// Chatbot Component (Chatbot.jsx)
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbot = () => {
    // messages holds the list of chat bubbles displayed in the UI.
    const [messages, setMessages] = useState([]);
    // input holds the current text in the input box.
    const [input, setInput] = useState('');
    // isOpen controls whether the chatbot window is visible.
    const [isOpen, setIsOpen] = useState(false);
    // messagesEndRef is used to scroll to the newest message automatically.
    const messagesEndRef = useRef(null);

    // sendMessage is triggered when the user sends a message.
    const sendMessage = async () => {
        // Prevent empty messages from being sent.
        if (!input.trim()) return;

        // Create a local user message and add it to the chat UI immediately.
        const userMessage = { sender: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        // Clear the input box after sending.
        setInput('');

        try {
            // The Netlify function endpoint that handles chatbot requests.
            // const apiUrl = '/.netlify/functions/chatbot';
            const functionUrl = import.meta.env.DEV
        ? 'http://localhost:8888/.netlify/functions/chatbot' // local Netlify dev server
        : '/.netlify/functions/chatbot'; // deployed Netlify site

            // Send the user message to the serverless function.
            const response = await axios.post(functionUrl, { message: input });

            // Create a bot message from the response and show it in the UI.
            const botMessage = { sender: 'bot', text: response.data.botResponse };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            // If the request fails, log it so we can debug deployment or endpoint issues.
            console.error('Error sending message:', error);
        }
    };

    // Scroll to the latest message whenever messages change.
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // When the user presses Enter, send the message instead of adding a new line.
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    // Disable page scrolling when the chatbot window is open.
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <div className="fixed right-6 bottom-6 flex flex-col items-end z-50">
            {/* Overlay: closes the chatbot when user clicks outside the window. */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-55 backdrop-blur-md z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Floating chatbot button to open/close the chat window. */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="relative z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center">
                <span className="material-symbols-rounded text-2xl">chat_bubble</span>
            </button>

            {/* The chat window itself. */}
            {isOpen && (
                <div className="fixed bottom-20 right-10 w-80 h-96 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-lg p-4 flex flex-col z-50">
                    {/* Close button in the top-right of the chat window. */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-2 text-gray-300 hover:text-gray-500"
                    >
                        ✖
                    </button>

                    {/* Message list: user and bot messages are rendered here. */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
                        {messages.map((msg, index) => (
                            <div key={index} className={`p-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <span 
                                    className={`inline-block px-3 py-1 rounded-lg max-w-[75%] break-words ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}
                                    dangerouslySetInnerHTML={{ __html: msg.text }} // Changed to render HTML for clickable links in bot responses
                                />
                            </div>
                        ))}
                        {/* This empty element is used to scroll to the bottom automatically. */}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input area where the user types messages. */}
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