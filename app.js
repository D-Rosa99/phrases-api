const express = require('express');

const testRouter = require('./src/routers/index');
require('./src/db-init');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/test', testRouter);
app.listen(PORT, console.log(`Server started on port ${PORT}`));
