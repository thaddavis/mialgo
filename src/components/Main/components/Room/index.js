import React from "react";
import { RoomContainer } from "./RoomElements";
import { BsFillTrashFill } from "react-icons/bs";
import { IoChatbubblesSharp } from "react-icons/io5";
import { StatusIcon } from "../StatusIcon";

export default function Room(props) {
  const { room, onJoinRoom, onDeleteRoom, selected } = props;

  function onClick() {
    onJoinRoom(room);
  }

  function onClickDeleteRoom(room) {
    onDeleteRoom(room);
  }

  // console.log("room", room);
  // debugger;

  return (
    <RoomContainer>
      <div className={`room ${selected ? "room-selected" : ""}`}>
        <div className="description">
          <IoChatbubblesSharp onClick={onClick} />
          <div className="name">
            <b onClick={onClick}>{room.name}</b>&nbsp;
            {/* <small>{room.roomID}</small> */}
            &nbsp;
            {!room.self && (
              <BsFillTrashFill onClick={() => onClickDeleteRoom(room)} />
            )}
            <br />
            {/* <small>roomID - {room.roomID.substring(0, 8)}</small> */}
            {/* <br />
            <small>socketID - {room.socketID.substring(0, 8)}</small> */}
            {/* {room.self ? " (yourself)" : ""} */}
          </div>
          {/* <div className="status">
            <StatusIcon connected={room.connected} />
            {room.connected ? "online" : "offline"}
          </div> */}
        </div>
        {room.hasNewMessagesAlert && <div className="new-messages">!</div>}
      </div>
    </RoomContainer>
  );
}
