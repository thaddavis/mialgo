import objectHash from "object-hash";

export function rooms(socket, ToastHelper, setChatUIState) {
  socket.on("rooms", (roomsWithSocket) => {
    console.log("EVENT rooms", roomsWithSocket);

    // ToastHelper.success("EVENT rooms");
    ToastHelper.success("Received list of chat rooms");

    setChatUIState((val) => {
      let newRooms = [];

      for (let i = 0; i < roomsWithSocket.length; i++) {
        roomsWithSocket[i].self =
          objectHash([val.guestInfo.email]).substring(0, 10) ===
          roomsWithSocket[i].roomID;

        newRooms.push(roomsWithSocket[i]);
      }

      console.log("newRooms", newRooms);

      // put the current user first, and sort by username ***
      newRooms.sort((a, b) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.name < b.name) return -1;
        return a.name > b.name ? 1 : 0;
      });

      return {
        ...val,
        rooms: newRooms,
      };
    });
  });
}
