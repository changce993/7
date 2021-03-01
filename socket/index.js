const socket = (http) => {
    const io = require('socket.io')(http);
    let users = [];

    io.on('connection', socket => {
        socket.on('product', product => socket.emit('newProd', product));

        socket.join(socket.id);
        users.push(socket.id);
        io.to(socket.id).emit('userId', { sessionId: socket.id, users });

        socket.on('message', payload => io.to(payload.to).emit('msg', {info: payload}));
    });
}

module.exports = socket;