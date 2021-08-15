const Server = require('./models/server')
const server = new Server()

server.execute();

// io.on('connection', (socket) => {
//   socket.emit('welcome', {
//     msg: 'Hello, welcome to server',
//     date: new Date()
//   });
//   // socket.on('client-msg', (data) => {
//   //   console.log(data)
//   // })
//   socket.on('msg-to-server', (data) => {
//     console.log(data);
//     //All clients
//     io.emit('msg-from-server', data);
//     // Only client that dispatch one event
//     // socket.emit('msg-from-server', data);
//   })
// });
