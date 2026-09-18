//old code dont include this in the new code    
// const express = require('express');
// const router = express.Router();

// // GET /api/emp/profile
// router.get('/profile', (req, res) => {
//     res.send('employee profile page called');
// });

// // GET /api/emp/attendance
// router.get('/attendance', (req, res) => {
//     res.send('employee attendance page called');
// });

// module.exports = router;





//new code
let express = require('express');

let router = express.Router();

// POST: /api/emp/register
router.post('/register', (req, res) => {
    let data = req.body;
    res.send(data.name);
});

// POST: /api/emp/login
router.post('/login', (req, res) => {
    res.send('login route called');
});

// GET: /api/emp/viewtasks
router.get('/viewtasks', (req, res) => {
    res.send('view tasks page called');
});

// GET: /api/emp/viewtodo
router.get('/viewtodo', (req, res) => {
    res.send('view todo page called');
});

// PUT: /api/emp/updateprofile
router.put('/updateprofile', (req, res) => {
    res.send('update profile page called');
});

module.exports = router;