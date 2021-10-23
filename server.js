const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const { Model } = require('objection');
const knexInstance = require('./db/knex');

// routes
const plates = require('./routes/plates');
const customers = require('./routes/customers');

Model.knex(knexInstance);

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', plates);
app.use('/api', customers);


app.get('/', (req, res) => {
  res.send(`Server is up....`);
})

module.exports = { app };