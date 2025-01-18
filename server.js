const express = require('express');
const next = require('next');

// Check if in development mode or production mode
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

console.log('Preparing Next.js app...');

app.prepare().then(() => {
  const server = express();

  console.log('Next.js app prepared. Configuring routes...');
  
  // Handle API routes
  server.all('/api/*', (req, res) => {
    console.log(`API route hit: ${req.url}`); // Log API calls
    return handle(req, res);
  });

  // Handle all other routes
  server.all('*', (req, res) => {
    console.log(`Page route hit: ${req.url}`); // Log page route hits
    return handle(req, res);
  });

  // Get the port from the environment variable
  const port = process.env.PORT || 3000;
  console.log(`Server listening on port ${port}`);  // Log the port

  // Start server
  server.listen(port, (err) => {
    if (err) {
      console.error('Error starting server:', err);
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Error during app preparation:', err);  // Log error during app preparation
  process.exit(1); // Exit process on failure
});
