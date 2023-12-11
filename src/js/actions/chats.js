import * as api from '../api/chats';


export function fetchChats() {
  return async function(dispatch) {
    const chats = await api.fetchChats()
    console.log("action : ",chats);
    debugger
    dispatch({
      type: 'CHATS_FETCH_SUCCESS',
      chats
    })
    return chats;
  }
}