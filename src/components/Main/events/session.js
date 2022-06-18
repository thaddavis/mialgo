export function session(socket) {
  socket.on("session", (session) => {
    console.log("EVENT session", session);

    const { roomID, guestInfo } = session;

    // attach the room ID to the next reconnection attempts
    socket.auth = {
      ...socket.auth,
      guestInfo,
      roomID,
    };

    localStorage.setItem("guestInfo", JSON.stringify(guestInfo));
  });
}
