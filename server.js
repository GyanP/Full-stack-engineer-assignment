const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const http = require('http');

const db = require('./db/db');

const app = express();

const PORT = process.env.PORT | 9000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', require('./routers/router'));

// Setup static directory to serve
app.use(express.static(path.resolve('client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client', 'build', 'index.html'));
});

const server = http.createServer(app);

server.listen(PORT, () => {
  db.sync({ alert: true });
  console.log(`server is runing on Port ${PORT}`);
});
