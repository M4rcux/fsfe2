#!/usr/bin/env node
var express = require('express');
var app = express();

const HTTP_PORT = 3000;

app.get('/', onRequest);
app.get('/secret', onSecretRequest);

app.listen(HTTP_PORT, function() {
  console.log(`App listening on por ${HTTP_PORT}`);
});

function onRequest(req, res) {
  res.send({ message: `Request on: ${req.body}`});
}

function onSecretRequest(req, res) {
  res.send({ mesaage: 'Accessing the secret section...'});
}
