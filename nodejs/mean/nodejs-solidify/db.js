const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-crud')
    .then(() => {
        console.log('Connected To MongoDb...');
    })
    .catch((err) => {
        console.log(err);
    })