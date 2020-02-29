const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const awsMiddleware = require('aws-serverless-express/middleware');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(awsMiddleware.eventContext());

app.use('/', routes);

module.exports = app;