export function privateMessage(socket, ToastHelper, setChatUIState, cloneDeep) {
  socket.on(
    "private message",
    ({ content, fromSessionID, fromGuestInfo, roomID }) => {
      console.log("EVENT private message");

      // ToastHelper.success("EVENT private message");
      ToastHelper.success("Message received");

      setChatUIState((val) => {
        let roomsCopy = cloneDeep(val.rooms);

        for (let i = 0; i < roomsCopy.length; i++) {
          let room = {
            ...roomsCopy[i],
          };

          // const fromSelf = socket.auth.roomID === from;

          if (room.roomID === roomID) {
            let hasNewMessages = true;
            let hasNewMessagesAlert =
              (val.selectedChatroom && val.selectedChatroom.roomID) ===
              room.roomID
                ? false
                : true;

            let messagesCopy = cloneDeep(room.messages);

            room = {
              ...room,
              messages: messagesCopy.concat([
                {
                  content,
                  fromSessionID,
                  fromGuestInfo,
                },
              ]),
              hasNewMessages: hasNewMessages,
              hasNewMessagesAlert: hasNewMessagesAlert,
            };

            roomsCopy = [
              ...roomsCopy.slice(0, i),
              room,
              ...roomsCopy.slice(i + 1),
            ];

            break;
          }
        }

        return {
          ...val,
          rooms: roomsCopy,
        };
      });
    }
  );
}
