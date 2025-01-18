const express = require('express');
const next = require('next');
const path = require('path');

// Check if in development mode or production mode
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

   // Serve a simple static HTML page
   server.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
  });

  // Serve static files like images, CSS, etc.
  server.use('/_next', express.static(path.join(__dirname, '.next')));
  server.use('/static', express.static(path.join(__dirname, 'static')));

  // Handle API routes (if any)
  server.all('/api/*', (req, res) => {
    return handle(req, res);
  });

  // Handle everything else
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000; // Use Azure's PORT env var
  server.listen(port, (err) => {
    if (err) {
      console.error('Error starting server:', err);
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Error during app preparation:', err);
  process.exit(1);
});
