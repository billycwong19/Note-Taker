const express = require('express');
const notes = require('./notes')

const app = express();

app.use(express.json());

app.use('/notes', notes);

module.exports = app;