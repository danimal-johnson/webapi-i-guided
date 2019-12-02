const express = require("express");
const db = require('./data/hubs-model.js');

const server = express();
const port = 4000;

server.get('/', (req, res) => {
  res.send({ api: 'Up and running...'})
});

// List of hubs GET /hubs
server.get('/hubs', (req, res) => {
  db.find()
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(error=>{
      console.log('error on GET /hubs', error)
      res.status(500).json({ errorMessage: 'Error getting list of hubs from database'});
  })
});

// Add a hub

// Remove a hub by its ID

// Update a hub, passing the ID and changes














server.listen(port, () => {
  console.log(`\n ** API running on port ${port} **\n`);
});