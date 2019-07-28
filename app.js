const express = require('express');

const app = express();


// create routes now
app.get('/',(req,res) => {
    res.send("tijira-1999");

});
app.get('/posts',(req,res) => {
    res.send("arijit-1999");

});


// listening from server
app.listen(3000);  //port 3000 that is localhost :3000 we gonna listen to
