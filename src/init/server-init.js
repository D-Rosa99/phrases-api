const testRouter = require('../routers/index');

function serverInit(app) {
  const PORT = process.env.PORT || 3000;

  app.use('/test', testRouter, 'This is a little a test');
  app.listen(PORT, console.log(`Server started on port ${PORT}`));
}

module.exports = serverInit;
