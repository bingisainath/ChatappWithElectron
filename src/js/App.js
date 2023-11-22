import React from "react";

export default function App() {
  const title = "My React";
  const enchanced = title + " - Changes";

  const sendNotification = () => {
    // ipcRenderer.send('notify','This is my Custom Message');
    // window.sendNotification('My Custom Message')
    electron.notificationApi.sendNotification('This is my Custom Message')
  };

  return (
    <>
      <div>{enchanced}</div>
      <button onClick={sendNotification}>Send Notification</button>
    </>
  );
}
