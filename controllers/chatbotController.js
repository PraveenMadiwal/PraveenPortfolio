// const db = require('../config/db');


const socialMediaLinks =  {
      href: 'https://www.linkedin.com/in/praveen-kumar-m-s-8280a6200',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
      </svg>,
      alt: 'LinkedIn'
    }

// Hardcoded bot responses (from database)
const botResponses = {
    'hello': 'Hi there! How can I help you today?',
    'hi': 'Hello! What can I do for you?',
    'how are you': 'I am doing well, thank you! How about you?',
    'what is your name': 'I am a chatbot created for this portfolio.',
    'bye': 'Goodbye! Have a great day!',
    'thank you': 'You are welcome!',
    'help': 'I can answer questions about the portfolio or general inquiries. What do you need?',
    'what do you do': 'I am here to assist with information about Praveen\'s portfolio, skills, and projects.',
    'tell me about praveen': 'Praveen is a skilled developer with expertise in web technologies, including React, Node.js, and more. Check out the portfolio for details!',
    'what are your skills': 'Praveen has skills in JavaScript, React, Node.js, databases, and UI/UX design.',
    'contact praveen': 'You can contact Praveen via the contact form on this website or through <a href="https://www.linkedin.com/in/praveen-kumar-m-s-8280a6200" target="_blank">LinkedIn</a> or <a href="mailto:praveenpavi633@gmail.com">email</a>.' ,
    'what projects have you done': 'Praveen has worked on various projects like portfolios, chatbots, and web applications. See the Projects section for more.',
    'how can i hire you': 'To hire Praveen, please reach out via the contact form or email provided on the site.',
    'what is your experience': 'Praveen has experience in full-stack development, building responsive websites and applications.',
    'do you have github': 'Yes, check out Praveen\'s GitHub for code samples and projects.',
    'what technologies do you use': 'Praveen uses technologies like React, Vite, Node.js, MySQL, Tailwind CSS, and more.',
    'can you help with coding': 'I can provide general advice, but for specific coding help, feel free to ask!',
    'what is your favorite project': 'Praveen enjoys working on interactive portfolios and chatbots like this one!',
    'how old are you': 'As a chatbot, I don\'t have an age, but Praveen is always learning new things!',
    'what is ai': 'AI stands for Artificial Intelligence, and I am a simple chatbot powered by code and a database.',
    'tell me a joke': 'Why did the developer go broke? Because he used up all his cache!',
    'what is the weather': 'I don\'t have access to real-time weather, but you can check a weather app for that.',
    'how to learn coding': 'Start with basics like HTML, CSS, JavaScript. Practice on platforms like freeCodeCamp or Codecademy.',
    'what is react': 'React is a JavaScript library for building user interfaces, especially single-page applications.',
    'what is node.js': 'Node.js is a runtime environment that allows you to run JavaScript on the server side.',
    'thank you for helping': 'You\'re welcome! Happy to assist.'
};

// 📌 Fetch bot response from the hardcoded responses (case-insensitive)
const getBotResponse = (message, callback) => {
    const response = botResponses[message.toLowerCase()];
    if (response) {
        console.log("Bot response found:", response);
        callback(null, response);
    } else {
        console.log("No response found for:", message);
        callback(null, "I'm not sure, but I'm learning!");
    }
};

//Handle user messages and fetch bot responses
export const sendMessage = (req, res) => {
    const { message } = req.body;

    getBotResponse(message, (err, botResponse) => {
        if (err) return res.status(500).json({ error: 'Error fetching response' });

        // No database storage, just return the response
        res.json({ botResponse });
    });
};

// Fetch all stored messages (return empty since no storage)
export const getAllMessages = (req, res) => {
    res.json([]); // No messages stored
};
