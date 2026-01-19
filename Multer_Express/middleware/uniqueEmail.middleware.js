const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../db.json');

const uniqueEmailMiddleware = (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  const exists = db.users.find(user => user.email === email);

  if (exists) {
    return res.status(409).json({ error: 'Email already exists' });
  }

  next();
};

module.exports = uniqueEmailMiddleware;
