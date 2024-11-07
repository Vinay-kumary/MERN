const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Login = require('../models/Login');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { userName, pwd } = req.body;

  try {
    const user = await Login.findOne({ userName });
    if (!user) return res.status(400).json({ msg: 'Invalid login details' });

    const isMatch = await bcrypt.compare(pwd, user.pwd);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid login details' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });

  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
