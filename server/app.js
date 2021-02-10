const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
app.set('port', 3000);

app.use('/', express.static(path.join(__dirname, '/../public')));

app.listen(app.get('port'), (err) => {
  if (err) {
    console.log('Not connected');
  } else {
    console.log(`Listening on port ${app.get('port')}`);
  }
});