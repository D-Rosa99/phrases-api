import express from 'express';
import morgan from 'morgan';
import path from 'path';

import serverInit from './server/init/server-init';
import dbInit from './server/init/db-init';

const app = express();
app.use(morgan('tiny'));
app.use(express.static(path.resolve(__dirname, './', 'dist')));
app.use(express.json());
serverInit(app);
dbInit();
