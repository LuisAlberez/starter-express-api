const express = require('express');
const morgan = require('morgan');
require('dotenv').config()
const app = express();
const routes = require('./routes/index.js');
app.listen(process.env.port||3000)
app.use(morgan('dev'))

app.use('/', routes);

module.exports=app