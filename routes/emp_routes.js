let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');

// Imported as 'User' to avoid variable shadowing collision inside routes
let User = require('../models/users');

// POST: /api/emp/register
router.post('/register', async (req, res) => {
    try {
        let data = req.body;
        data.password = await bcrypt.hash(data.password, 10);
        let newUser = new User(data);
        let result = await newUser.save();
        res.send(result);
    } catch (err) {
        res.send({ error: err.message });
    }
});

// POST: /api/emp/login
router.post('/login', async (req, res) => {
    try {
        let users = await User.findOne({ email: req.body.email });

        if (users) {
            let passmatch = await bcrypt.compare(req.body.password, users.password);

            if (passmatch) {
                res.send("login successful");
            } else {
                res.send("password invalid");
            }
        } else {
            res.send("email invalid");
        }
    } catch (err) {
        res.send({ error: err.message });
    }
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

router.patch("/updateprofile/:id", async (req, res) => {
    let data = req.body;
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }
    let updatedata = await User.findByIdAndUpdate(req.params.id, { $set: data }, { new: true });
    res.send(updatedata);
});


module.exports = router;
