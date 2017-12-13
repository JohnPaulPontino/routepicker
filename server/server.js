const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

io.on('connection',(socket)=>{
    console.log('New User Connected');

    socket.on('createMessage',(message)=>{
        console.log('New Message: ', message);
        io.emit('newMessage',{
            from:message.from,
            text:message.text,
            createdAt: new Date().getTime()
        });
    });

    socket.on('disconnect',()=>{
        console.log('User Disconnected');
    });
});

app.use(express.static(publicPath));
server.listen(port,()=>{
    console.log(`Server Running in port ${port}...`);
});


