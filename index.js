const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 5000

require('./io')(io)

server.listen(PORT, () => {
  console.log(`Servert listening on port ${PORT}`)
})