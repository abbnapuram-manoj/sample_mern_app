let express = require('express');
let router = express.Router();

// 1. Import directly without curly brackets as 'users'
let users = require('../models/users');    

router.get('/employees', async (req, res) => {
    let result = await users.find();
    result.password = undefined; 
    res.send(result);
});

router.get('/assign-tasks', (req, res) => {
    res.send('assign task page called');
});

router.get('/task', (req, res) => {
    res.send('task page called');
});

router.get('/notification', (req, res) => {
    res.send('notification page called');
});

// 2. Uses 'users.findByIdAndDelete'
router.delete("/deleteemp/:id", async (req, res) => {
    let result = await users.findByIdAndDelete(req.params.id);
    if (result) {
        res.send("emp record deleted success");
    } else {
        res.send("delete route called");
    }
});

module.exports = router;