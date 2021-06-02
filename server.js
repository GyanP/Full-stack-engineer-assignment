const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const http = require('http');

const db = require('./db/db');

const app = express();

const PORT = process.env.PORT | 5000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', require('./routers/router'));
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// if (process.env.NODE_ENV === 'production') {
console.log('entering', process.env.NODE_ENV);
app.get('/', (req, res) => {
  console.log('req', req);
  console.log('res', res);
  res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// }

/*
------------------
    Create Server
------------------
*/

const server = http.createServer(app);

server.listen(PORT, '0.0.0.0', () => {
  // db.sync({ alert: true });
  console.log(`server is runing on Port ${PORT}`);
});
