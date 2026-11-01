const express = require("express");
const path = require("path");
const { validateStudent } = require("../utils/validation");

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.post("/register", (req, res) => {
    const errors = validateStudent(req.body);

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Please correct the following errors.",
            errors
        });
    }

    res.status(201).json({
        success: true,
        message: "Student registration successful!"
    });
});

module.exports = router;
