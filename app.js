const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config');


// middleware for parser should be called whenever we send any request
app.use(bodyParser.json());


// middlewares
// a function that executes when routes are hit
// we can restrict this

// app.use('/posts', () =>{
//     console.log("this is a middleware running"); //this message will be printed on the console when we run the localhost:3000/posts that is when we hit the posts route

    
// });

// app.use(auth); this will check whether a particular user is authenticated for any specific posts

// import routes
const postsRoute = require('./routes/posts')

app.use('/posts',postsRoute); 


// create routes now
app.get('/',(req,res) => {
    res.send("tijira-1999");

});


//connect to db

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log("connected to database")
    
    );

// listening from server
app.listen(3000);  //port 3000 that is localhost :3000 we gonna listen to


// we cannot process the requests coming in 
// so we need a package called bodyparser