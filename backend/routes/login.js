// Remove the initial fetch API section that belongs to frontend code
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users-table'); // Ensure this path correctly points to your User model
// Import sequelize instance
const sequelize = require('../config/database');


const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  console.log(`Login attempt for username: ${username}`);

  try {
    const user = await User.findOne({
      where: { Username: username },
    });

    if (!user) {
      console.log(`User not found: ${username}`);
      return res.status(401).json({ message: 'Authentication failed' });
    } else if (user.Locked) {
      console.log(`User account is locked: ${username}`);
      return res.status(401).json({ message: 'Account is locked' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.HashedPassword);
    console.log(`Password validity for ${username}: ${isPasswordValid}`);

    if (isPasswordValid) {
      // Reset FailedAttempts and update LastLogin on successful login
      await user.update({
        LastLogin: sequelize.fn('GETDATE'), // Directly use SQL Server's GETDATE() to set the current timestamp
        FailedAttempts: 0,
        Locked: false,
      });

      const token = jwt.sign({
        UserID: user.UserID,
        ClientID: user.ClientID,
      }, 'secretKey', { expiresIn: '1h' }); // Make sure to replace 'secretKey' with your actual secret key, stored securely

      return res.json({ token, clientId: user.ClientID });
    } else {
      // Increment FailedAttempts and lock account after 3 failed attempts
      let attempts = user.FailedAttempts + 1;
      await user.update({
        FailedAttempts: attempts,
        Locked: attempts >= 3,
      });

      console.log(`Failed login attempt for user: ${username}, attempts: ${attempts}`);
      return res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error', error });
  }
});

module.exports = router;
