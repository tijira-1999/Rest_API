const express = require('express');

const router = express.Router();

const Post = require('../models/Post');


router.get('/',(req,res) => {
    res.send("arijit-1999");

});

router.get('/cool',(req,res) => {
    res.send("arijit-1999 cool");

});

router.post('/',(req,res) =>{
    console.log(req.body);

});


module.exports = router;