const uws = require('uws');

let server = new uws.Server({ port: process.env.PORT || 3000 }, () => {
    console.log(`${process.platform} _ ${process.versions.modules}`)
    console.log("Server is running on: 3000")
});

server.on('connection', (socket) => {
    console.log('Server is connected');
    socket.on('message', (message) => {
        socket.send(message);
    });
});
