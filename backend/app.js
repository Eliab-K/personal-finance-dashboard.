const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'finance',
  host: 'db',
  database: 'finance_db',
  password: 'finance123',
  port: 5432
});

app.get('/', (req, res) => {
  res.send('Personal Finance Dashboard API running!');
});

// Example endpoint
app.get('/transactions', async (req, res) => {
  const result = await pool.query('SELECT * FROM transactions');
  res.json(result.rows);
});

app.listen(3000, () => console.log('Backend running on port 3000'));

