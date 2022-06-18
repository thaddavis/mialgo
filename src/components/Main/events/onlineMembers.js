export function onlineMembers(socket, ToastHelper, setChatUIState) {
  socket.on("online members", (onlineMembers) => {
    // console.log("EVENT online members");
    // ToastHelper.success("EVENT online members");
    ToastHelper.success("Received list of online members");

    console.log("onlineMembers", onlineMembers);

    // debugger;

    onlineMembers.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.guestInfo.name < b.guestInfo.name) return -1;
      return a.guestInfo.name > b.guestInfo.name ? 1 : 0;
    });

    setChatUIState((val) => {
      return {
        ...val,
        onlineMembers,
      };
    });
  });
}
