//.\backend\models\jobs-sp.js
const sequelize = require('../config/database'); 

const { QueryTypes } = require('sequelize');
const JobsSP = {};

JobsSP.getJobsByCustomerID = async (clientID, customerID) => {
    return await sequelize.query('EXEC GetRelatedJobs @ClientID=:clientID, @CustomerID=:customerID', {
        replacements: { 
            clientID: clientID,
            customerID: customerID
        },
        type: QueryTypes.SELECT
    });
}
