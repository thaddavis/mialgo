export function roomConnected(socket, ToastHelper, setChatUIState) {
  socket.on("room connected", function (roomInfo) {
    console.log("EVENT room connected", roomInfo);

    // ToastHelper.success("EVENT room connected");
    ToastHelper.success("New room has been created");

    setChatUIState((val) => {
      let newRooms = [];

      return {
        ...val,
        rooms: [...val.rooms, roomInfo],
      };
    });
  });
}
