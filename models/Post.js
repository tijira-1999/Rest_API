const mongoose = require('mongoose');

// schema represents how that posts look
const PostSchema = mongoose.Schema({

    title: String,
    description: String,
    date: Date.now

});