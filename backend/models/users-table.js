//.\backend\models\login.js

const sequelize = require('../config/database'); // Make sure this path is correct.
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  UserID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ClientID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Clients', // This value is usually the table name
      key: 'ClientID'
    }
  },
  FirstName: DataTypes.STRING,
  LastName: DataTypes.STRING,
  Email: DataTypes.STRING,
  Phone: DataTypes.STRING,
  Username: DataTypes.STRING,
  HashedPassword: DataTypes.STRING,
  Role: DataTypes.STRING,
  LastLogin: DataTypes.DATE,
  IsActive: DataTypes.BOOLEAN,
  FailedAttempts: DataTypes.INTEGER,
  Locked: DataTypes.BOOLEAN
}, {
  tableName: 'Users',
  timestamps: false
});

module.exports = User; // Export the User model directly.
