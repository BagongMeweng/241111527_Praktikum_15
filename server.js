require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
 
const app = express();
const PORT = process.env.PORT || 3000;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
 
app.use(cors());
app.use(express.static('public')); 

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Daily Inspiration API 🚀</h1>');
});
 
// API endpoint – return 9 random quotes
app.get('/api/quotes', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, quotes AS text, author_name AS author, created_at
       FROM quotes
       ORDER BY RANDOM()
       LIMIT 9`
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});
 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});