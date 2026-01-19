const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.middleware'); // your multer setup
const uniqueEmailMiddleware = require('../middleware/uniqueEmail.middleware');

router.post(
  '/signup',
  upload.single('profile'),
  uniqueEmailMiddleware,
  (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'Profile image required' });
    res.status(201).json({ message: 'Route works!', body: req.body });
  }
);

module.exports = router;
