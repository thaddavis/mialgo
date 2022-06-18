export function connect(socket, ToastHelper) {
  socket.on("connect", () => {
    console.log("EVENT connect");

    // ToastHelper.success("EVENT connected");
    ToastHelper.success("Connected to chat server");
  });
}
