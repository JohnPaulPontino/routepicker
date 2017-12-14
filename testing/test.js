const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const jwt = require('jsonwebtoken');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

let userprofile = {
    username: 'jhaypee',
    password: 'paswword123'
};

io.on('connection',(socket)=>{
    console.log('New User Connected');

    //On user login Greetings Message
    socket.emit('newMessage',generateMessage('Admin', 'Welcome to the chat app'));

    socket.on('userLogin',(data,callback)=>{
        if(data.username == userprofile.username && data.password == userprofile.password){
            socket.emit('loginResponse', {
                response:'True',
            });
        }else{
            socket.emit('loginResponse', {
                response:'False',
            });
        }
        console.log('try to login',data);
        callback(data);
    });

    //On user login alert to all
    socket.broadcast.emit('newMessage',generateMessage('Admin', 'New User Join'));

    socket.on('createMessage',(message, callback)=>{
        console.log('New Message: ', message);
        socket.broadcast.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server.');
    });

    socket.on('disconnect',()=>{
        console.log('User Disconnected');
    });
});

app.use(express.static(publicPath));

app.post('/login', function (req, res) {

    let profile = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.com',
        password: 'paswword123',
        id: 123
    };

    let token = jwt.sign(profile, jwtSecret, { expiresInMinutes: 60*5 });

    res.json({token: token});
});

server.listen(port,()=>{
    console.log(`Server Running in port ${port}...`);
});


