const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
require('./db.js');
require('./app/routes/routes.js')(app);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`The Server Running On Port ${port}...`));