const express = require('express');
const next = require('next');

// Check if in development mode or production mode
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Handle API routes (if any)
  server.all('/api/*', (req, res) => {
    return handle(req, res);
  });

  // Handle all other routes through Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Get the port from the Azure environment variable
  const port = process.env.PORT || 3000;

  // Listen on the correct port (either from Azure or default 3000)
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
