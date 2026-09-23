let express= require('express');
let router= express.Router();


let {User}= require('../models/users');    
router.get('/employees', async (req, res) => {
    let result= await User.find();
    result.password= undefined; // Hide password field for security 
    res.send(result);
});

router.get('/assign-tasks', (req, res) => {
    res.send('assign task page  called');
});

//2 more routs with end points task and notification in get method

router.get('/task', (req, res) => {
    res.send('task page called');
});

router.get('/notification', (req, res) => {
    res.send('notification page called');
});

module.exports=router;
