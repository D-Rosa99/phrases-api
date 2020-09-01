const express = require('express');
const morgan = require('morgan');
const app = express();

require('./src/init/db-init');
require('./src/init/server-init')(app);

app.use(morgan('tiny'));
app.use(express.json());
