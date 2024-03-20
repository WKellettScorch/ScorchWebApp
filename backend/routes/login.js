// backend/routes/login.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users-table'); // Ensure this path correctly points to your User model
const sequelize = require('../config/database');


const router = express.Router();
router.post('/', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({
        where: { Username: username },
      });
  
      if (!user) {
        return res.status(401).json({ message: 'Username or password incorrect' });
      } else if (user.Locked) {
        return res.status(401).json({ message: 'User account is locked. Please contact your administrator.' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.HashedPassword);
  
      if (isPasswordValid) {
        await user.update({
          LastLogin: sequelize.fn('GETDATE'),
          FailedAttempts: 0,
          Locked: false,
        });
  
        const token = jwt.sign({
          UserID: user.UserID,
          ClientID: user.ClientID,
        }, 'secretKey', { expiresIn: '1h' });
  
        return res.json({ token, clientId: user.ClientID });
      } else {
      let attempts = user.FailedAttempts + 1;
        await user.update({
        FailedAttempts: attempts,
        Locked: attempts >= 3,
        });
  
        // Optionally, lock the account if attempts exceed a threshold
        return res.status(401).json({ message: 'Username or password incorrect' });
      }
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'An error occurred. Please try again later.' });
      }
      
  });
  
module.exports = router;