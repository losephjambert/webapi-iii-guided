const express = require('express'); // importing a CommonJS module
const helmet = require('helmet')
const morgan = require('morgan')

const hubsRouter = require('./hubs/hubs-router.js');
const gateKeeper = require('./middleware/gateKeeper.js');

const server = express();

// global middleware
server.use(helmet()); // third party
server.use(express.json()); // built in
server.use(gateKeeper); // custom
server.use(morgan('dev')); // third party

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

module.exports = server;
