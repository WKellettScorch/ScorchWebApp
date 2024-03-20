const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*' })); // Note about CORS for production
app.use(bodyParser.json());

// Testing database connection
sequelize.authenticate().then(() => {
    console.log('Connection to database established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables synchronized');
});

// Import routes
const customersRoutes = require('./routes/customers');
const jobsRoutes = require('./routes/jobs');
const loginRoute = require('./routes/login');

app.use('/api/customers', customersRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/login', loginRoute); // Use the imported login route

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
