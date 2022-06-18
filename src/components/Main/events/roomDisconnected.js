export function roomDisconnected(socket, ToastHelper, setChatUIState) {
  socket.on("room disconnected", (roomToDelete) => {
    console.log("EVENT room disconnected", roomToDelete);

    // ToastHelper.error("EVENT room disconnected");
    ToastHelper.error("A room has been disconnected");

    setChatUIState((val) => {
      console.log("EVENT room disconnected", roomToDelete);

      let roomsCopy = [...val.rooms];

      for (let i = 0; i < roomsCopy.length; i++) {
        let room = roomsCopy[i];

        if (room.roomID === (roomToDelete && roomToDelete.roomID)) {
          roomsCopy = [...roomsCopy.slice(0, i), ...roomsCopy.slice(i + 1)];
          break;
        }
      }

      return {
        ...val,
        rooms: [...roomsCopy],
      };
    });
  });
}
