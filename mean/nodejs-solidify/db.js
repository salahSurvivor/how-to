const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-crud')
    .then(() => {
        console.log('Contected To DataBase');
    })
    .catch((err) => {
        console.log(err.message);
    });

module.exports = mongoose;    
