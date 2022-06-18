export function sessionDisconnected(socket, ToastHelper, setChatUIState) {
  socket.on("session disconnected", (id) => {
    console.log("EVENT session disconnected");

    // ToastHelper.error("EVENT session disconnected");
    ToastHelper.error("A chat server session has been destroyed");

    setChatUIState((val) => {
      console.log("EVENT session disconnected");

      let valCopy = {
        ...val,
        onlineMembers: [...val.onlineMembers],
      };

      for (let i = 0; i < valCopy.onlineMembers.length; i++) {
        const existingOnlineMember = valCopy.onlineMembers[i];
        // if (user.userID === id) {
        if (existingOnlineMember.sessionID === id) {
          existingOnlineMember.connected = false;
          break;
        }
      }

      return {
        ...valCopy,
        onlineMembers: [...valCopy.onlineMembers],
      };
    });
  });
}
