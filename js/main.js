let express = require('express');
let app = express();
let request = require('request');
// Current API key saved on profile page
const apiKey = '#';
let zip = document.getElementById('zip').value;
let month = document.getElementById('month').value;
month = month.toLowerCase();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
    console.log('App is listening at https://%s:%s?q=zip', host, port);
});
