// Clients.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Client', {
        ClientID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        BusinessTypeID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'BusinessTypes',
                key: 'BusinessTypeID'
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