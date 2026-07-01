CREATE TABLE IF NOT EXISTS quotes (
  id SERIAL PRIMARY KEY,
  quotes TEXT NOT NULL,
  author_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO quotes (quotes, author_name) VALUES
  ('The only way to do great work is to love what you do.', 'Steve Jobs'),
  ('In the middle of every difficulty lies opportunity.', 'Albert Einstein'),
  ('Do not watch the clock; do what it does. Keep going.', 'Sam Levenson'),
  ('It does not matter how slowly you go as long as you do not stop.', 'Confucius'),
  ('Success is not final, failure is not fatal: It is the courage to continue that counts.', 'Winston Churchill'),
  ('Believe you can and you''re halfway there.', 'Theodore Roosevelt'),
  ('Act as if what you do makes a difference. It does.', 'William James'),
  ('What lies behind us and what lies before us are tiny matters compared to what lies within us.', 'Ralph Waldo Emerson'),
  ('The future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt');
  ()