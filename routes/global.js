const express = require('express');
const router = express.Router();
const limiter = require('../middlewares/rateLimit');


router.get('/', limiter, async (req, res) => {
  res.send('Hey 👋');
});

module.exports = router;