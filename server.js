const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const http = require('http');
const { connect } = require('mongoose');

const app = express();

connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database connected successfully!!!');
  })
  .catch((error) => {
    console.log('Error in database connection', error.message);
  });

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api', require('./routers/router'));

app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const server = http.createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server is runing on Port ${port}`);
});
