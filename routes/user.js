const express = require('express');
const User = require('../models/User');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  // Fetch user details
  try {
    const user = await User.findOne({ _id: req.user._id});
    if(!user){
      return res.status(400).send({ error: 'User does not exist.' })
    }
    const userData = {
      name: user.name,
      email: user.email,
      timestamp: user.timestamp,
    }
    return res.status(201).send({ user: userData });
  } catch (error) {
    console.log('Catched error');
    res.status(400).send({ error: 'Something weird happened.' });
  }
})

router.post('/', async (req, res) => {
  // Create a new user
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).send({ error: 'Some fields are missing.' });
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    console.log('Catched error');
    res.status(400).send({ error: 'User already exists.' });
  }
});

//Login a registered user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).send({ error: 'Incorrect credentials.' });
    }
    const token = await user.generateAuthToken();
    const userData = {
      name: user.name,
      email: user.email,
      timestamp: user.timestamp,
    }
    res.send({ user: userData, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

router.post('/change-password', auth, async (req, res) => {
  // Find the user
  try {
    if (!req.body.password) {
      return res.status(400).send('Invalid request');
    }
    User.findOne({ _id: req.user._id }).exec(async (err, user) => {
      if (err) console.log(err);
      if (!user) {
        return res.status(400).send('User not found.');
      }
      user.password = req.body.password;
      await user.save();
      return res.status(200).send({ status: 'Password changed successfully.' });
    });
  } catch (err) {
    res.status(400).send({ err });
  }
});

module.exports = router;