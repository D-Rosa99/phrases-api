const express = require('express');
const morgan = require('morgan');

const serverInit = require('./src/init/server-init');
require('./src/init/db-init');

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
serverInit(app);
