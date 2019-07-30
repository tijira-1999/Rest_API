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
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

// saving to db
post.save()               // returns a promise
.then(data => {
    res.json(data);   //outputs data on screen
})
.catch(err => {
    res.json({message: err})
})

});


module.exports = router;