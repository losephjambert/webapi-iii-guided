const express = require('express'); // importing a CommonJS module
const helmet = require('helmet')

const hubsRouter = require('./hubs/hubs-router.js');
const dateLogger = require('./middleware/dateLogger.js');
const methodLogger = require('./middleware/methodLogger.js');

const server = express();

// global middleware
server.use(helmet()); // third party
server.use(express.json()); // built in
server.use(dateLogger); // custom
server.use(methodLogger); // custom

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

module.exports = server;
