//.\backend\routes\jobs.js
const express = require('express');
const sequelize = require('../config/database');
const router = express.Router();
const DataTypes = require('sequelize').DataTypes;
const Jobs = require('../models/jobs-table')(sequelize, DataTypes);
const JobsSP = require('../models/jobs-sp');

// Fetch related Jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Jobs.findAll();
    res.json(jobs);
  } catch (err) {
    console.error('Error:', err.message);
    console.error(err.stack);  // This will log the stack trace
    res.status(500).send('Server error');
  }  
});

// Fetch jobs by customerID
router.get('/related/:clientID/:customerID', async (req, res) => {
    try {
        const { clientID, customerID } = req.params;
        const jobs = await JobsSP.getJobsByCustomerID(clientID, customerID);
        res.json(jobs);
    } catch (err) {
        console.error('Error:', err.message);
        console.error(err.stack);  // This will log the stack trace
        res.status(500).send('Server error');
    }
});

module.exports = router;