const path = require('path');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const rsvp = require('./rsvp');

const app = express();

app.use(compression());
app.disable('x-powered-by');
app.enable('trust proxy');
app.use(express.static(path.join(__dirname, '..', '..', 'static')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/rsvp', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  rsvp(req.body, req.ip, req.headers['user-agent'], (error, result) => {
    if (error) {
      return res
        .status(500)
        .end(JSON.stringify({ error: { message: error.message } }));
    }

    return res.status(200).end(JSON.stringify(result));
  });
});

module.exports = { app };
