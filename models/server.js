
const express = require('express')
const http = require('http');
const socketio = require('socket.io');
const path = require('path')

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;

    //Http Server
    this.server = http.createServer(this.app)

    //Config Socket
    this.io = socketio(this.server, {/*Config*/ });
  }
  configSockets() {
    //
  }
  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, '../public')))
  }
  execute() {
    this.middlewares();
    this.configSockets();
    this.server.listen(this.port, () => {
      console.log('Server Listenend at Port', this.port);
    });
  }
}

module.exports = Server;