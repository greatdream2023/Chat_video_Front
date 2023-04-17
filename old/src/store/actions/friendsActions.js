import { openAlertMessage } from './alertActions';
import * as api from '../../api';
export const friendsActions={
    SET_FRIENDS:'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITATION:'FRIENDS.SET_PENDING_FRIENDS.SET_PEND',
    SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS'
}

export const getActions=(dispatch)=>{
    return {
        sendFriendInvitation:(data,closeDialogHandler)=>{
            dispatch(sendFriendInvitation(data,closeDialogHandler))
        }
    }
}

export const setPendingFriendsInvitations=(pendingFriendsInvitations)=>{
    return {
        
        type :friendsActions.SET_PENDING_FRIENDS_INVITATION,
        pendingFriendsInvitations
    }
}

const sendFriendInvitation =(data,closeDialogHandler)=>{
    return async (dispatch)=>{
        const response =await api.sendFriendInvitation(data)
        if(response.error)
        {
            dispatch(openAlertMessage(response.exception?.data))
        }
        else
        dispatch(openAlertMessage('Ivitation has been sent '))
        //closeDialogHandler();
    }
}
