// Addresses.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Address', {
        AddressID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        StreetAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        City: DataTypes.STRING,
        State: DataTypes.STRING,
        ZipCode: DataTypes.STRING,
        GeoCoordinates: DataTypes.STRING
    });
};