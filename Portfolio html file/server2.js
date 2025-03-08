const express = require('express'); 
const app = express();

app.get('/', function (req, res) {
  res.sendFile('Portfolio.html', {root: './' })
})

app.get('/ViewProject1', function (req, res) {
  res.sendFile('Viewproject1.html', {root: './' })
})

app.listen(8080, () => console.log('Portfolio port 8080'));