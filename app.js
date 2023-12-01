require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.use(routes);


app.listen(process.env.SERVER_PORT);
console.log(`Server is listening on port ${process.env.SERVER_PORT}`);