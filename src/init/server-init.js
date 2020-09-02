const router = require('../routers');

function serverInit(app) {
  const PORT = process.env.PORT || 3000;

  app.use('/api/quote', router);
  app.use('/api/user', router);
  app.listen(PORT, console.log(`Server started on port ${PORT}`));
}

module.exports = serverInit;
