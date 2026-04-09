import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
// const mysql = require('mysql2'); // Commented for local testing

dotenv.config();

const app = express();
app.use(express.json());

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'], // Allow both frontend URLs
    methods: 'GET,POST',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(cors()); // Allow requests from any origin

// ✅ Routes
import chatbotRoutes from './routes/chatbotRoutes.js';
app.use('/api/chatbot', chatbotRoutes);

const PORT = process.env.PORT || 5001;

// Commented DB connection for local testing
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Praveen@1",
//   database: "chatbotdb",
// });

// db.connect((err) => {
//   if (err) {
//       console.error('❌ MySQL Connection Failed:', err);
//       process.exit(1);
//   }
//   console.log('✅ MySQL Connected');
// });

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
app.use((req, res, next) => {
    console.log(`📢 Incoming request: ${req.method} ${req.url}`);
    next();
});

// Mock chatbot route for testing
app.post('/api/chatbot/message', (req, res) => {
    console.log('Received request:', req.body);
    const { message } = req.body;
    // Mock response for testing
    const responses = {
        'hello': 'Hi there!',
        'hi': 'Hello!',
        'how are you': 'I am good, thanks!',
        'bye': 'Goodbye!',
        'what is your name': 'I am a chatbot for Praveen\'s portfolio.',
        'tell me about praveen': 'Praveen is a skilled developer with expertise in React, Node.js, and more.',
    };
    const botResponse = responses[message.toLowerCase()] || 'I am a test response! Ask me about Praveen or general questions.';
    res.json({ botResponse });
});
app.get('/', (req, res) => {
    res.send('Server is working!');
});

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
