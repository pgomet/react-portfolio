
const next = require('next');
const express = require('express');
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const server = express();
const viewRoutes = require('./viewRoutes');

app.prepare().then(() => {
  viewRoutes(server, app);

  server.get('*', (req, res) => {
    app.render(req, res, '/');
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log('[ i ] Next.js server ready on port', PORT);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});


module.exports = app;