// Accounts.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Account', {
        AccountID: {
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
        PlatformName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        HashedPassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        AccountURL: DataTypes.STRING
    });
};