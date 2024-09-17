const { DataTypes } = require("sequelize");
const USER = require("./user.model.js");

module.exports = (sequelize, Sequelize) => {
    const STUDENT = sequelize.define("student", {
        user_id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            refernces: {
                model: USER,
                key: "user_id",
            },
        },
        class_year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        enrollment_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        attendance_percentage: {
            // for each day, should recalculade and update
            type: DataTypes.FLOAT,
            validate: {
                min: 0,
                max: 100,
            },
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "active",
            allowNull: false,
            validate: {
                isIn: [["active", "graduated", "withdrawn"]],
            },
        },
    });

    return STUDENT;
};
