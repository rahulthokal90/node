const express = require('express');
//const events = require('./events');
const path = require('path');

const app = express();

const port = process.env.PORT || 5001;

const expressWs = require('express-ws')(app);

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.ws('/', function(ws, req) {
  console.log('hello');
  const githubEvent = {}; // sample github Event from Github event API https://api.github.com/events
  console.log("g "+githubEvent);
	ws.send('message', githubEvent);
});

app.listen(port, function() {
	console.log('Listening on', port);
});