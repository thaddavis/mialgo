import * as React from "react";

import { List, Nav, ListItem } from "./styles";

import FeaturedMember from "../FeaturedMember";
import Room from "../Room";
import OnlineMember from "../OnlineMember";

import { ToastHelper } from "../../../../helpers/toast";

export function SideDrawer(props) {
  const {
    show,
    closeDrawer,
    onSelectRoom,
    onDeleteRoom,
    rooms,
    featuredChatMembers,
    selectedChatroom,
    guestInfo,
    onlineMembers,
  } = props;

  console.log("*** rooms ***", rooms);

  return (
    <Nav show={show}>
      <div id="featured">
        <h2>Talent</h2>
        {featuredChatMembers &&
          featuredChatMembers.map((i, idx) => {
            return (
              <FeaturedMember
                key={idx}
                member={i}
                onJoinRoom={(featuredMember) => {
                  console.log("$^$^$", featuredMember, onlineMembers);

                  // if (
                  //   onlineMembers.find((m) => {
                  //     console.log("m", m);

                  //     return m.guestInfo.email === featuredMember.email;
                  //   })
                  // ) {
                  //   onJoinRoom([
                  //     guestInfo,
                  //     {
                  //       name: featuredMember.name,
                  //       email: featuredMember.email,
                  //     },
                  //   ]);
                  // } else {
                  //   ToastHelper.error("Featured member is not online");
                  // }
                }}
              />
            );
          })}
      </div>

      <div id="rooms">
        <h2>Companies</h2>
        {rooms &&
          rooms.map((i, idx) => {
            const selected =
              i.roomID === (selectedChatroom && selectedChatroom.roomID);

            return (
              <Room
                key={idx}
                selected={selected}
                room={i}
                onJoinRoom={(room) => {
                  console.log("<- onJoinRoom ->");
                  room.hasNewMessages = false;
                  room.hasNewMessagesAlert = false;
                  onSelectRoom(room);
                  closeDrawer();
                }}
                onDeleteRoom={(room) => {
                  onDeleteRoom(room);
                }}
              />
            );
          })}
      </div>

      {/* <div id="members">
        <hr />
        <h2>Online</h2>
        {onlineMembers &&
          onlineMembers.map((i, idx) => {
            return (
              <OnlineMember
                key={idx}
                member={i}
                guestInfo={guestInfo}
                onJoinRoom={(guestToJoinWith) =>
                  onJoinRoom([guestInfo, guestToJoinWith.guestInfo])
                }
              />
            );
          })}
      </div> */}
    </Nav>
  );
}
