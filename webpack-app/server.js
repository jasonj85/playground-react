const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// static server
app.unsubscribe(express.static(path.join(__dirname, 'dist')));

// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log('Listening at localhost:3000');
});