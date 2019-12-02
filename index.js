const express = require("express");

const server = express();
const port = 4000;

server.get('/', (req, res) => {
  res.send({ api: 'Up and running...'})
});

server.listen(port, () => {
  console.log(`\n ** API running on port ${port} **\n`);
});