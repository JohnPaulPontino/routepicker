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

    //On user login Greetings Message
     socket.emit('newMessage',{
         from: 'Admin',
         text: 'Welcome to the app',
         createdAt: new Date().getTime()
     });
     //On user login alert to all
    socket.broadcast.emit('newMessage',{
        from:'Admin',
        text: 'New User Have Login',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage',(message)=>{
        console.log('New Message: ', message);
        socket.broadcast.emit('newMessage', {
            from: message.from,
            text: message.text,
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


