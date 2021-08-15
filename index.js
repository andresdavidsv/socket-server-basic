const express = require('express')
const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
  socket.emit('welcome', {
    msg: 'Hello, welcome to server',
    date: new Date()
  });
  // socket.on('client-msg', (data) => {
  //   console.log(data)
  // })
  socket.on('msg-to-server', (data) => {
    console.log(data);
    //All clients
    io.emit('msg-from-server', data);
    // Only client that dispatch one event
    // socket.emit('msg-from-server', data);
  })
});
server.listen(8080, () => {
  console.log('Server Listenend at Port 8080');
});