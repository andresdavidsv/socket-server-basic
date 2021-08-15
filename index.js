const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => {
  console.log('Client Connect');
});
server.listen(8080, () => {
  console.log('Server Listenend at Port 8080');
});