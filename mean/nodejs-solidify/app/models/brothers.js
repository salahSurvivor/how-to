const mongoose = require('mongoose');

var Mongoose = mongoose.model('brothers', {
        name: {
            type: String,
        },
        job: {
            type: String,
        },
        age: {
            type: Number,
        }
    }
);

module.exports = Mongoose;