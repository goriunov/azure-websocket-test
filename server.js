const uws = require('clusterws-uws');

let server = new uws.WebSocketServer({ port: 3000 }, () => console.log("Server is running on: 3000"));

server.on('connection', (socket) => {
    socket.on('message', (message) => {
        socket.send(message);
    });
});
