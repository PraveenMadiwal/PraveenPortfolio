const db = require('./config/db');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const { message } = JSON.parse(event.body);

  return new Promise((resolve) => {
    const sql = "SELECT bot_answer FROM bot_responses WHERE LOWER(user_question) = LOWER(?) LIMIT 1";
    db.query(sql, [message.toLowerCase()], (err, results) => {
      if (err) {
        resolve({
          statusCode: 500,
          body: JSON.stringify({ error: 'Database error' }),
        });
        return;
      }

      const botResponse = results.length > 0 ? results[0].bot_answer : "I'm not sure, but I'm learning!";

      // Store message
      const insertSql = "INSERT INTO messages (user_message, bot_reply) VALUES (?, ?)";
      db.query(insertSql, [message, botResponse], (insertErr) => {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ botResponse }),
        });
      });
    });
  });
};