// createUserScript.js
const bcrypt = require('bcrypt');
const sequelize = require('../config/database'); // make sure the path is correct
const Sequelize = require('sequelize');
const User = require('../models/users-table')(sequelize, Sequelize.DataTypes); // Adjust the path accordingly


const createNewUser = async () => {
  const username = 'testUser';
  const password = 'myPassword';
  const clientId = 1;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      ClientID: clientId,
      Username: username,
      HashedPassword: hashedPassword,
      FirstName: 'Wes',
      LastName: 'Kellett',
      Email: 'wesley.kellett@yahoo.com',
      Phone: '469-585-6541',
      Role: 'Manager',
      IsActive: true,
      FailedAttempts: 0,
      Locked: false
    });

    console.log('User created:', newUser);
  } catch (error) {
    console.error('Error creating new user:', error);
  }
};

createNewUser();
