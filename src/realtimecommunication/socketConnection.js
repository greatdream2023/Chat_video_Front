import io from 'socket.io-client';
let socket=null
export const connectWithSocketServer=()=>{
socket=io('http://localhost:8080');
socket.on('connection',()=>{
console.log('connection established with Socket in 8080 ')
console.log(socket.id);
});
}