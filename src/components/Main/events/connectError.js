export function connectError(socket, onEnterChat, ToastHelper) {
  socket.on("connect_error", (err) => {
    console.log("EVENT connect_error", err);

    ToastHelper.error(`${err.message}`);

    if (err.message === "invalid sessionID") {
      onEnterChat(null);
    }
  });
}
