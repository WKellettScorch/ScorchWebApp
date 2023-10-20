//.\backend\models\customer-address-sp.js
const sequelize = require('../config/database'); 

const { QueryTypes } = require('sequelize');
const CustomerAddressSP = {};

CustomerAddressSP.getCustomerAddressByClientID = async (clientID) => {
    return await sequelize.query('EXEC GetCustomerAddressByClientID @ClientID=:clientID', {
        replacements: { clientID: clientID },
        type: QueryTypes.SELECT
    });
}

CustomerAddressSP.searchCustomersByFields = async (clientID, name, email, address) => {
    return await sequelize.query('EXEC SearchCustomersByFields @ClientID=:clientID, @Name=:name, @Email=:email, @Address=:address', {
        replacements: { 
            clientID: clientID,
            name: name || '', 
            email: email || '', 
            address: address || ''
        },
        type: QueryTypes.SELECT
    });
}

// Inserting Records

CustomerAddressSP.addAddress = async (StreetAddress, City, State, ZipCode, GeoCoordinates) => {
    const result = await sequelize.query('EXEC InsertAddress @StreetAddress=:StreetAddress, @City=:City, @State=:State, @ZipCode=:ZipCode, @GeoCoordinates=:GeoCoordinates', {
        replacements: {
            StreetAddress,
            City,
            State,
            ZipCode,
            GeoCoordinates
        },
        type: QueryTypes.INSERT
    });
    return result[0].AddressID; // Assuming the stored procedure returns the AddressID of the newly inserted address.
}

CustomerAddressSP.addCustomer = async (ClientID, FirstName, LastName, Email, Phone, StreetAddress, City, State, ZipCode, GeoCoordinates) => {
    return await sequelize.query('EXEC sp_InsertCustomer @ClientID=:ClientID, @FirstName=:FirstName, @LastName=:LastName, @Email=:Email, @Phone=:Phone, @StreetAddress=:StreetAddress, @City=:City, @State=:State, @ZipCode=:ZipCode, @GeoCoordinates=:GeoCoordinates', {
        replacements: {
            ClientID,
            FirstName,
            LastName,
            Email,
            Phone,
            StreetAddress,
            City,
            State,
            ZipCode,
            GeoCoordinates
        },
        type: QueryTypes.INSERT
    });
}




module.exports = CustomerAddressSP;
