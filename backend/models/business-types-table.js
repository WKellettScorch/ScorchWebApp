// BusinessTypes.js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('BusinessType', {
        BusinessTypeID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        BusinessTypeName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};