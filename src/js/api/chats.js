// import db from "../db/firestore";

// // export const fetchChats = () => {
// //   db.collection("chats")
// //     .get()
// //     .then((snapshot) => {
// //       snapshot.docs.map((doc) => {
// //         return doc.data;
// //       });
// //     });
// // };

// export const fetchChats = () => {
//   db.collection("chats")
//     .get()
//     .then((snapshot) => {
//       snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     });
// };

import db from "../db/firestore";

const extractSnapshotData = (snapshot) =>
  snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

export const fetchChats = () =>
  db
    .collection("chats")
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    )
    .then(extractSnapshotData);
