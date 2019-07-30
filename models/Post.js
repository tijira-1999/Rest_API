const mongoose = require('mongoose');

// schema represents how that posts look
const PostSchema = mongoose.Schema({

    title: {
       type: String,
       required : true

    },
    description: {
        type: String,
       required : true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Posts',PostSchema);

