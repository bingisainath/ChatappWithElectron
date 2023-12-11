import React from 'react';
import { useParams } from 'react-router-dom';

import ChatUserList from '../components/ChatUserList';
import ChatMessagesList from '../components/CHatMessageList';
import ViewTitle from '../components/shared/ViewTitle';

export default function Chat() {
const {id} = useParams();

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <ViewTitle text={`Joined Channel - ${id}`}/>
        <ChatMessagesList />
      </div>
    </div>
  )
}