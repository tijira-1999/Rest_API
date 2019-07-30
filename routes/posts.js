const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
    res.send("arijit-1999");

});

router.get('/cool',(req,res) => {
    res.send("arijit-1999 cool");

});


module.exports = router;