const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
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
        gradeLevel: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [
                    [
                        "Kindergarten",
                        "1st",
                        "2nd",
                        "3rd",
                        "4th",
                        "5th",
                        "6th",
                        "7th",
                        "8th",
                        "9th",
                        "10th",
                        "11th",
                        "12th",
                    ],
                ],
            },
        },
    });

    return Student;
};
