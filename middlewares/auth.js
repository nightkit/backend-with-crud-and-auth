const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const data = await jwt.verify(token, process.env.SECRET);
    req.user = data;
    next();
  } catch (error) {
    res.status(401).send({
      error: 'Invalid JWT token.',
    });
  }
};

module.exports = auth;