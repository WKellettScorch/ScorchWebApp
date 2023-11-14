//.\backend\server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');  // Importing the sequelize instance from database.js
const app = express();
const cors = require('cors');

app.use(cors({
    //origin: 'http://localhost:3001'
    origin: '*'
}));


// Middleware to parse the body of the request
app.use(bodyParser.json());

// Test database connection
sequelize.authenticate().then(() => {
    console.log('Connection to database established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables synchronized');
});

// Import your routes
const customersRoutes = require('./routes/customers');
const jobsRoutes = require('./routes/jobs');

// Use the routes with your Express app
app.use('/api/customers', customersRoutes);
app.use('/api/jobs', jobsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
