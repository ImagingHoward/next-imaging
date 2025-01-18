process.env.NODE_OPTIONS = '--no-deprecation'; 

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Use the dynamic port provided by Azure, or fallback to port 3000 for local development
  const port = process.env.PORT || 3000;

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      console.error("Server failed to start:", err);
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error("Error during app preparation:", err);
  process.exit(1);
});
