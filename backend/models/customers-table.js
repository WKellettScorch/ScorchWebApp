// Customers.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Customer', {
        CustomerID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ClientID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Clients',
                key: 'ClientID'
            }
        },
        FirstName: DataTypes.STRING,
        LastName: DataTypes.STRING,
        Email: DataTypes.STRING,
        Phone: DataTypes.STRING,
        AddressID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Addresses',
                key: 'AddressID'
            }
        }
    });
};