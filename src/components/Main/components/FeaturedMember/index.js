import React, { useState, useRef, useEffect } from "react";

import Button from "react-bootstrap/Button";

import { GiTotemHead } from "react-icons/gi";
import { UserContainer } from "./FeaturedMemberElements";

export default function User(props) {
  const { member, onJoinRoom } = props;

  const { skills } = member;

  function joinChatWithFeaturedMember() {
    onJoinRoom(member);
  }

  return (
    <UserContainer>
      <div className="user">
        <div className="description">
          <GiTotemHead />
          <div className="name">
            <b>{member.name}</b> <small>{member.email}</small>
          </div>
          <Button
            style={{ margin: "0.2em" }}
            size="sm"
            onClick={joinChatWithFeaturedMember}
          >
            Chat
          </Button>
          <br />
          Skills - {skills && skills.join(", ")}
        </div>
        {/* {user.hasNewMessages && <div className="new-messages">!</div>} */}
      </div>
    </UserContainer>
  );
}
