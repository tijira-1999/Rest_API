const express = require('express');

const app = express();

// middlewares
// a function that executes when routes are hit
// we can restrict this

// app.use('/posts', () =>{
//     console.log("this is a middleware running"); //this message will be printed on the console when we run the localhost:3000/posts that is when we hit the posts route

    
// });

// app.use(auth); this will check whether a particular user is authenticated for any specific posts


// create routes now
app.get('/',(req,res) => {
    res.send("tijira-1999");

});
app.get('/posts',(req,res) => {
    res.send("arijit-1999");

});


// listening from server
app.listen(3000);  //port 3000 that is localhost :3000 we gonna listen to
