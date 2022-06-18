export function sessionConnected(socket, ToastHelper, setChatUIState) {
  socket.on("session connected", function (session) {
    console.log("EVENT session connected", session);

    // ToastHelper.success("EVENT session connected");
    ToastHelper.success("A chat server session has been created");

    setChatUIState((val) => {
      let valCopy = {
        ...val,
        onlineMembers: [...val.onlineMembers],
      };
      for (let i = 0; i < valCopy.onlineMembers.length; i++) {
        const existingOnlineMember = valCopy.onlineMembers[i];

        if (existingOnlineMember.sessionID === session.sessionID) {
          existingOnlineMember.connected = true;
          return {
            ...valCopy,
            onlineMembers: [...valCopy.onlineMembers],
          };
        }
      }

      return {
        ...val,
        onlineMembers: [...val.onlineMembers, session],
      };
    });
  });
}
