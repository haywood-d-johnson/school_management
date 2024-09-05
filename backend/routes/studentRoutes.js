const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Route to fetch all students
router.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Route to create a new student
router.post("/students", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Invalid student data" });
    }
});

module.exports = router;
