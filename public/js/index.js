/**
 * Created by jhaypeepontz on 12/13/17.
 */
let socket = io();

socket.on('connect',function(){
    console.log('Connected to the server');

});

socket.on('disconnect',function(){
    console.log('Disconnected to the server');
});

socket.on('newMessage',function (message) {
    console.log('message from server: ', message);
});

socket.on('loginResponse',function (message) {
    console.log('Your response is: ',message);
})

socket.emit('createMessage',{
    from: 'Test',
    text: 'Test Content'
},function (data) {
    console.log('Got it', data);
});

socket.emit('userLogin',{
    username:'jhaypee',
    password:'paswword123'
},function (message) {
    console.log(message);
});