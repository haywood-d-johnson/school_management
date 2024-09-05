const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const studentSchema = new mongoose.Schema({
    // Basic information
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    studentId: {
        type: String,
        required: true,
        unique: true,
        default: () => uuidv4(),
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
    },
    address: {
        type: String,
    },
    phoneNumber: {
        type: String,
        unique: false,
    },
    email: {
        type: String,
        unique: false,
        validate: {
            validator: function (v) {
                return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9])?\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9])?\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9])?\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]))\])$/.test(
                    v
                );
            },
            message: "Invalid email address",
        },
    },

    // Academic information
    gradeLevel: {
        type: String,
        enum: ["Kindergarten", "1st Grade", "2nd Grade", "...", "12th Grade"],
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
    },

    // Behavioral information
    disciplinaryActions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "DisciplinaryAction",
        },
    ],
    awards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Award",
        },
    ],

    // Attendance
    attendanceRecords: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AttendanceRecord",
        },
    ],
});

module.exports = mongoose.model("Student", studentSchema);
