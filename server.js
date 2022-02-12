const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')))
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
const server = http.createServer(app);
const port = 9000;
server.listen(port);
console.debug('Server listening on port ' + port);