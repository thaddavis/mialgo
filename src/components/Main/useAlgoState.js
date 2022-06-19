import React, { useState, useEffect } from "react";
import cloneDeep from "lodash/cloneDeep";
import axios from "axios";
import objectHash from "object-hash";

import { ToastHelper } from "../../helpers/toast";
// import events from "./events";

const useDimeAlgo = (socket) => {
  const [mainUIState, setMainUIState] = useState({
    guestInfo: null,
    selectedBoard: {},
    rooms: [
      {
        name: "City Furniture",
        roomID: "City Furniture",
        messages: [
          {
            fromGuestInfo: "City Furniture",
            content: "Looking for Full Stack Developers",
          },
        ],
      },
      {
        name: "Algorand",
        roomID: "Algorand",
        messages: [
          {
            fromGuestInfo: "Algorand",
            content: "Looking for UI/UX designer",
          },
        ],
      },
      {
        name: "Stacks",
        roomID: "Stacks",
        messages: [
          {
            fromGuestInfo: "Stacks",
            content: "Looking for Clarity Developers",
          },
        ],
      },
    ],
    featuredChatMembers: [
      {
        name: "a",
        email: "e@e.com",
        skills: ["UI/UX"],
      },
    ],
  });

  useEffect(() => {
    console.log("load Chat state");

    async function loadFeaturedChatMembers() {
      console.log("loadFeaturedChatMembers");

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_DATA_API_SERVICE_NAME}/featuredChatMembers`,
          { withCredentials: true }
        );

        setMainUIState((val) => {
          return {
            ...val,
            featuredChatMembers: res.data,
          };
        });
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const onSelectRoom = (room) => {
    console.log("onJoinRoom", room);

    setMainUIState((val) => {
      return {
        ...val,
        selectedChatroom: room,
      };
    });
  };

  const onDeleteRoom = (roomToDelete) => {
    console.log("onDeleteRoom", roomToDelete);

    // socket.emit("delete room", roomToDelete);

    setMainUIState((val) => {
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
        selectedChatroom: {
          guestInfo: mainUIState.guestInfo || {},
          hasNewMessages: false,
          hasNewMessagesAlert: false,
          members: [mainUIState.guestInfo || {}],
          messages: [],
          name: (mainUIState.guestInfo && mainUIState.guestInfo.name) || "",
          roomID:
            (mainUIState.guestInfo &&
              mainUIState.guestInfo.email &&
              objectHash([mainUIState.guestInfo.email]).substring(0, 10)) ||
            "",
          self: true,
        },
      };
    });
  };

  const onSendMessage = (messageBody, selectedChatroom) => {
    console.log("onSendMessage");

    setMainUIState((val) => {
      if (val.selectedChatroom) {
        let roomsCopy = [...val.rooms];

        for (let i = 0; i < roomsCopy.length; i++) {
          let room = roomsCopy[i];

          if (
            room.roomID ===
            (val.selectedChatroom && val.selectedChatroom.roomID)
          ) {
            room = {
              ...room,
              messages: [
                ...room.messages,
                {
                  content: messageBody,
                  fromSelf: true,
                  fromGuestInfo: val.guestInfo,
                },
              ],
              hasNewMessages: true,
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
          rooms: [...roomsCopy],
        };
      } else {
        return {
          ...val,
        };
      }
    });
  };

  const onEnterChat = (guestInfo) => {
    if (guestInfo) {
      const { email, name } = guestInfo;

      // hash the user with a single item array to produce
      // a reproducible sessionID that can be used to retrieve the
      // state of the chat experience from a hash map in redis
      const sessionID = objectHash([email]).substring(0, 10);

      setMainUIState((val) => {
        return {
          ...val,
          guestInfo: {
            email,
            name,
          },
          selectedChatroom: {
            guestInfo: guestInfo || {},
            hasNewMessages: false,
            hasNewMessagesAlert: false,
            members: [guestInfo || {}],
            messages: [],
            name: (guestInfo && guestInfo.name) || "",
            roomID:
              (guestInfo &&
                guestInfo.email &&
                objectHash([guestInfo.email]).substring(0, 10)) ||
              "",
            self: true,
          },
        };
      });

      if (email && name) {
        // socket.auth = {
        //   guestInfo,
        //   sessionID,
        // };
        // socket.connect();
      }
    } else {
      setMainUIState((val) => {
        return {
          ...val,
          guestInfo: null,
        };
      });

      localStorage.removeItem("guestInfo");

      // socket.disconnect();
    }
  };

  return {
    mainUIState,
    onSendMessage,
    onEnterChat,
    onSelectRoom,
    onDeleteRoom,
  };
};

export default useDimeAlgo;
