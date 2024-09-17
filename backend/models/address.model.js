const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define("address", {
        address_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Address;
};
