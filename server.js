const express = require('express');
const next = require('next');
const path = require('path');

// Check if in development mode or production mode
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files (for example, if you have images in /public)
  server.use('/_next', express.static(path.join(__dirname, '.next')));
  server.use('/public', express.static(path.join(__dirname, 'public')));

  // Handle all other requests using Next.js routing
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // Listen on the port defined by Azure (using process.env.PORT)
  const port = process.env.PORT || 3000;  // Azure will provide a PORT env var
  server.listen(port, (err) => {
    if (err) {
      console.error('Error starting server:', err); // Log error for debugging
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Error during app preparation:', err);  // Log error during app preparation
  process.exit(1); // Exit the process if Next.js fails to prepare
});