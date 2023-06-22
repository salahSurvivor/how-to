const express = require('express');
//for avoid the http error in angular
const cors = require('cors');
const bodyParser = require('body-parser');

// import db and controller
require('./db.js');

// use libary that i import
const app = express();
app.use(bodyParser.json());
app.use(cors());
//import routes
require('./app/routes/routes')(app);

// start the server
const port = process.env.port || 3000;
app.listen(port, () => console.log(`The Port Run On ${port}...`));