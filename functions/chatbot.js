// const db = require('./config/db');

// Hardcoded bot responses (from database)
const botResponses = {
    'hello': 'Hi there! How can I help you today?',
    'hi': 'Hello! What can I do for you?',
    'how are you': 'I am doing well, thank you! How about you?',
    'what is your name': "I am a chatbot created for Praveen's portfolio.",
    'bye': 'Goodbye! Have a great day!',
    'thank you': 'You are welcome!',
    'help': 'I can answer questions about the portfolio or general inquiries. What do you need?',
    'what do you do': 'I am here to assist with information about Praveen\'s portfolio, skills, and projects.',
    'tell me about praveen': 'Praveen is a skilled developer with expertise in web technologies, including React, Node.js, and more. Check out the portfolio for details!',
    'what are your skills': 'Praveen has skills in JavaScript, React, Node.js, databases, and UI/UX design.',
    'contact praveen': 'You can contact Praveen via the contact form on this website, <a href="https://www.linkedin.com/in/praveen-kumar-m-s-8280a6200" target="_blank">LinkedIn</a>, or <a href="mailto:praveenpavi633@gmail.com">email</a>.',
    'what projects have you done': 'Praveen has worked on various projects like portfolios, chatbots, and web applications. See the Projects section for more.',
    'how can i hire you': 'To hire Praveen, please reach out via the contact form or email provided on the site.',
    'what is your experience': 'Praveen has experience in full-stack development, building responsive websites and applications.',
   // 'do you have github': 'Yes, check out Praveen\'s GitHub for code samples and projects.',
    'what technologies do you use': 'Praveen uses technologies like React, Vite, Node.js, MySQL, Tailwind CSS, Java, and more.',
   'can you help with coding': 'I can provide general advice, but for specific coding help, feel free to ask!, required coding contact praveen for detailed assistance.',
    'what is your favorite project': 'Praveen enjoys working on interactive portfolios and chatbots like this one!',
    'how old are you': 'As a chatbot, I don\'t have an age, but Praveen is always learning new things!',
    'what about his courses done in AI': 'AI stands for Artificial Intelligence, and I am a simple chatbot powered by code and a database, Praveen know AI tools.',
    'tell me a joke': 'Why did the developer go broke? Because he used up all his cache!',
    'what is the weather': 'I don\'t have access to real-time weather, but you can check a weather app for that.',
    'how to learn coding': 'Start with basics like HTML, CSS, JavaScript. Practice on platforms like freeCodeCamp or Codecademy.',
    'what is react': 'React is a JavaScript library for building user interfaces, especially single-page applications.',
    'what is node.js': 'Node.js is a runtime environment that allows you to run JavaScript on the server side.',
    'thank you for helping': 'You\'re welcome! Happy to assist.',
    'hobbies': 'Do you want personal or professional hobbies? Please type "personal" (or) "professional".',
    'what is his hobbies': 'Do you want personal or professional hobbies? Please type "personal" (or) "professional".',
    'professional': 'Praveen enjoys coding, learning new technologies, and building projects.',
    'personal': 'Praveen enjoys traveling, cooking, and playing video games in his free time.',
};

export const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const { message } = JSON.parse(event.body);

  const botResponse = botResponses[message.toLowerCase()] || "I'm not sure, but I'm learning!";

  return {
    statusCode: 200,
    body: JSON.stringify({ botResponse }),
  };
};