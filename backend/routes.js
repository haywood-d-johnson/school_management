const express = require("express");
const router = express.Router();

const studentRoutes = require("./routes/studentRoutes");

// Middleware to log incoming requests
router.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
});

// Middleware to parse JSON request bodies
router.use(express.json());

// Mount route handlers
router.use("/students", studentRoutes);

module.exports = router;
