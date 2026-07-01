
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');          // ← added for sendFile
const { Pool } = require('pg');
 
const app = express();
const PORT = process.env.PORT || 3000;
 
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
 
app.use(cors());
 
// Serve static assets (CSS, images, etc.) from the "public" folder
app.use(express.static('public'));
 
// 1. Welcome route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Daily Inspiration API 🚀</h1>');
});
 
// 2. HTML page route
app.get('/quotes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
 
// 3. API that returns 9 random quotes as JSON
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
 