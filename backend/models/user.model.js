const { DataTypes } = require("sequelize");
const ADDRESS = require("./address.model");

module.exports = (sequelize, Sequelize) => {
    const USER = sequelize.define("user", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                is: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            },
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isPhoneNumber: true,
            },
        },
        date_of_birth: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isBefore: new Date(),
            },
        },
        address_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refernces: {
                model: ADDRESS,
                key: "address_id",
            },
        },
        roles: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["active", "inactive"]],
            },
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ustatus: {
            type: DataTypes.STRING,
            defaultValue: "active",
            validate: {
                isIn: [["active", "inactive"]],
            },
        },
    });

    return USER;
};
