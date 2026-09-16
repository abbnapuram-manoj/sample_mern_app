const express = require('express');
const router = express.Router();

// GET /api/emp/profile
router.get('/profile', (req, res) => {
    res.send('employee profile page called');
});

// GET /api/emp/attendance
router.get('/attendance', (req, res) => {
    res.send('employee attendance page called');
});

module.exports = router;
