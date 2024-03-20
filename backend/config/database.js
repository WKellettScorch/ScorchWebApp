//.\backend\config\database.js

/*const { Sequelize } = require('sequelize');

const dbConfig = {
    username: 'wesley.kellett',
    password: 'Jan131996*',
    database: 'SCORCH_DB',
    host: '18.190.253.157',
    dialect: 'mssql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
    pool: dbConfig.pool
});*/


const { Sequelize } = require('sequelize');

// If using Windows Authentication, username and password are not needed
const sequelize = new Sequelize('SCORCH_DB', 'service_account', 'password', {
    host: 'localhost', // Try without specifying the instance name
    dialect: 'mssql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        options: {
            // For Windows Authentication
            trustedConnection: true
        }
    }
});


module.exports = sequelize;
