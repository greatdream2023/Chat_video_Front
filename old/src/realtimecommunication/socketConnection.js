import io from 'socket.io-client';
import { setPendingFriendsInvitations } from '../store/actions/friendsActions';
import  store  from '../store/store';
let socket=null
export const connectWithSocketServer=(userDetails)=>{
    const jwtToken=userDetails.token;
socket=io('http://localhost:8080',{
    auth: {
        token:jwtToken,
    }
});
socket.on('connect',()=>{
console.log('connection established with Socket in 8080 ')
console.log(socket.id);
});
socket.on('friends-invitations',(data)=>{
const { pendinglnvitations }= data;
store.dispatch(setPendingFriendsInvitations())
});
}