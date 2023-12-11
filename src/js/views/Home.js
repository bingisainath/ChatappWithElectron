// import React, { useEffect } from "react";
// import AvaliableChats from "../components/AvaliableChats";
// import JoinedChats from "../components/JoinedChats";

// import ViewTitle from "../components/shared/ViewTitle";
// import fetchChats from '../api/chats'

// export default function Home() {
//   useEffect(() => {
//     fetchChats().then((chats) => {
//       // debugger
//       console.log("====================================");
//       console.log(chats);
//       console.log("====================================");
//     });
//   }, []);

//   return (
//     // <div className="content-wrapper">
//     <div className="row no-gutters fh">
//       <div className="col-3 fh">
//         <JoinedChats />
//       </div>
//       <div className="col-9 fh">
//         <ViewTitle text={"Choose Your Channel"} />
//         <AvaliableChats />
//       </div>
//     </div>
//     // </div>
//   );
// }

import React, { useEffect } from "react";
import JoinedChatsList from "../components/JoinedChats";
import AvailableChatsList from "../components/AvaliableChats";
import ViewTitle from "../components/shared/ViewTitle";
import { fetchChats } from "../actions/chats";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChats())
  }, [dispatch])

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatsList />
      </div>
      <div className="col-9 fh">
        <ViewTitle text={`Choose your channel Kshitij`} />
        <AvailableChatsList />
      </div>
    </div>
  );
}
