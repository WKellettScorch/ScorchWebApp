//.\backend\routes\customers.js
const express = require('express');
const sequelize = require('../config/database');
const router = express.Router();
const DataTypes = require('sequelize').DataTypes;
const Customer = require('../models/customers-table')(sequelize, DataTypes);
const CustomerAddressSP = require('../models/customer-address-sp');

// Fetch all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (err) {
    console.error('Error:', err.message);
    console.error(err.stack);  // This will log the stack trace
    res.status(500).send('Server error');
  }  
});

// Fetch customer address by clientID
router.get('/address/:clientID', async (req, res) => {
  try {
    const clientID = req.params.clientID;
    const address = await CustomerAddressSP.getCustomerAddressByClientID(clientID);
    res.json(address);
  }  catch (err) {
    console.error('Error:', err.message);
    console.error(err.stack);  // This will log the stack trace
    res.status(500).send('Server error');
  }
  
});

// Search customers by client ID, name, email, and address
router.get('/search', async (req, res) => {
  try {
    const clientID = req.query.clientID;
    const name = req.query.name;
    const email = req.query.email;
    const address = req.query.address;    
    console.log('About to search with:', clientID, name, email, address);
    const search = await CustomerAddressSP.searchCustomersByFields(clientID, name, email, address);
    console.log('Search results:', search);
    res.json(search);
  }  catch (err) {
    console.error('Error:', err.message);
    console.error(err.stack);  // This will log the stack trace
    res.status(500).send('Server error');
  }
});

//Adding records for customers and addresses
router.post('/add', async (req, res) => {
  try {
    console.log("Add customer route hit!");
    const { StreetAddress, City, State, ZipCode, GeoCoordinates, FirstName, LastName, Email, Phone } = req.body;

    const ClientID = 1;  // For testing
    await CustomerAddressSP.addCustomer(ClientID, FirstName, LastName, Email, Phone, StreetAddress, City, State, ZipCode, GeoCoordinates);
    
    res.json({ message: "Customer added successfully!" });
    
  } catch (err) {
    console.error('Error:', err.message);
    console.error(err.stack);
    res.status(500).send('Server error');
  }
});





// You can add more CRUD operations here for customers and their addresses

module.exports = router;
