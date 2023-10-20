// Jobs.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Job', {
        JobID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        JobDescription: DataTypes.STRING,
        StartDate: DataTypes.DATE,
        EndDate: DataTypes.DATE,
        JobStatus: DataTypes.STRING,
        AddressID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Addresses',
                key: 'AddressID'
            }
        },
        ClientID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Clients',
                key: 'ClientID'
            }
        },
        CustomerID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Customers',
                key: 'CustomerID'
            }
        }
    });
};