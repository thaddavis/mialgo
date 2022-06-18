export function disconnect(socket, ToastHelper, setChatUIState) {
  socket.on("disconnect", (id) => {
    console.log("EVENT disconnect");

    // ToastHelper.error("EVENT disconnect");
    ToastHelper.error("Disconnected from chat server");

    setChatUIState((val) => {
      console.log("EVENT disconnected");

      let valCopy = {
        ...val,
        rooms: [...val.rooms],
      };

      for (let i = 0; i < valCopy.rooms.length; i++) {
        const room = valCopy.rooms[i];
        room.connected = false;
      }

      return {
        ...valCopy,
        rooms: [...valCopy.rooms],
      };
    });
  });
}
