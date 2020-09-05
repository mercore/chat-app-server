module.exports = io => {

  io.on('connection', socket => {
    
    socket.on('join', name => {
      socket.emit('message', { user: 'admin', text: `${name}, welcome to the chat` })
      socket.broadcast.emit('message', { user: 'admin', text: `${name}, has join the chat` })
    })

    socket.on('sendMessage', ({ name, message }) => {
      io.emit('message', { user: name, text: message })
    })

    socket.on('typing', name => {
      socket.broadcast.emit('typing', `${name} is typing a message...`)
    })

    socket.on('removeTyping', () => {
      socket.broadcast.emit('removeTyping')
    })

    socket.on('leave', name => {
      socket.broadcast.emit('message', { user: 'admin', text: `${name}, has left the chat` })
    })
  })

}