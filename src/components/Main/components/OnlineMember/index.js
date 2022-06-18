import React from "react";
import { OnlineMemberContainer } from "./OnlineMemberElements";
import { StatusIcon } from "../StatusIcon";
import { GiTotemHead } from "react-icons/gi";
// import { AiFillWechat } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";

export default function Member(props) {
  const { member, guestInfo, onJoinRoom } = props;

  // console.log("member", member);

  return (
    <OnlineMemberContainer>
      <div className={`room`}>
        <div className="description">
          <div className="name">
            <GiTotemHead />
            <br />
            <StatusIcon connected={member.connected} />
            <b>{member.guestInfo.name}</b> - {member.guestInfo.email}
            &nbsp;
            {guestInfo.email === member.guestInfo.email ? " (yourself)" : ""}
            &nbsp;
            {guestInfo.email !== member.guestInfo.email && (
              <Button
                onClick={() => {
                  onJoinRoom(member);
                }}
              >
                Chat
              </Button>
            )}
            <br />
            {member.sessionID}
          </div>
        </div>
      </div>
    </OnlineMemberContainer>
  );
}
