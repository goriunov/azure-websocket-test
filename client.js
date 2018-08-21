const uws = require('clusterws-uws');

let socket = new uws.WebSocket("ws://test-websocket.azurewebsites.net");

socket.on('open', () => {
    console.log("websocket oppened");
})

socket.on('message', (message) => {
    console.log(message)
});
