# Portfolio with Chatbot

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Setup Database:**
   - Install MySQL (e.g., via XAMPP or MySQL Installer).
   - Run the setup.sql file to create database and tables.
   - Update config/db.js with your MySQL credentials.

3. **Start Backend:**
   ```bash
   node server.js
   ```

4. **Start Frontend:**
   ```bash
   npm run dev
   ```
   Open http://localhost:5174

## Deployment

- **Frontend:** Deploy to Netlify (static build).
- **Backend:** Deploy to Railway, Render, or Heroku (supports Node.js + MySQL).
- Update Chatbot.jsx API URL to deployed backend.
- Use environment variables for DB credentials in production.