-- Create database
CREATE DATABASE IF NOT EXISTS chatbotdb;

-- Use the database
USE chatbotdb;

-- Create bot_responses table
CREATE TABLE IF NOT EXISTS bot_responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_question VARCHAR(255) NOT NULL,
    bot_answer TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_message TEXT NOT NULL,
    bot_reply TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample responses
INSERT INTO bot_responses (user_question, bot_answer) VALUES
('hello', 'Hi there! How can I help you today?'),
('hi', 'Hello! What can I do for you?'),
('how are you', 'I am doing well, thank you! How about you?'),
('what is your name', 'I am a chatbot created for this portfolio.'),
('bye', 'Goodbye! Have a great day!'),
('thank you', 'You are welcome!'),
('help', 'I can answer questions about the portfolio or general inquiries. What do you need?'),
('what do you do', 'I am here to assist with information about Praveen\'s portfolio, skills, and projects.'),
('tell me about praveen', 'Praveen is a skilled developer with expertise in web technologies, including React, Node.js, and more. Check out the portfolio for details!'),

('contact praveen', 'You can contact Praveen via the contact form on this website, email at praveenpavi633@gmail.com, or through LinkedIn.'),
('what projects have you done', 'Praveen has worked on various projects like portfolios, chatbots, and web applications. See the Projects section for more.'),
('how can i hire you', 'To hire Praveen, please reach out via the contact form or email provided on the site.'),
('what is your experience', 'Praveen has experience in full-stack development, building responsive websites and applications.'),
('do you have github', 'Yes, check out Praveen\'s GitHub for code samples and projects.'),
('what technologies do you use', 'Praveen uses technologies like React, Vite, Node.js, MySQL, Tailwind CSS, and more.'),
('can you help with coding', 'I can provide general advice, but for specific coding help, feel free to ask!'),
('what is your favorite project', 'Praveen enjoys working on interactive portfolios and chatbots like this one!'),
('how old are you', 'As a chatbot, I don\'t have an age, but Praveen is always learning new things!'),
('what is ai', 'AI stands for Artificial Intelligence, and I am a simple chatbot powered by code and a database.'),
('tell me a joke', 'Why did the developer go broke? Because he used up all his cache!'),
('what is the weather', 'I don\'t have access to real-time weather, but you can check a weather app for that.'),
('how to learn coding', 'Start with basics like HTML, CSS, JavaScript. Practice on platforms like freeCodeCamp or Codecademy.'),
('what is react', 'React is a JavaScript library for building user interfaces, especially single-page applications.'),
('what is node.js', 'Node.js is a runtime environment that allows you to run JavaScript on the server side.'),
('thank you for helping', 'You\'re welcome! Happy to assist.');