import React, { useEffect } from "react";
import { LeftPanel, RightPanel } from "./MainUIElements";
import Room from "../Room";
import OnlineMember from "../OnlineMember";
import FeaturedMember from "../FeaturedMember";

import { Button, ButtonGroup } from "react-bootstrap";

import useAlgoState from "../../useAlgoState";

import CollectChatGuestInfo from "../../../Forms/CollectChatGuestInfo";
import ChatRoom from "../ChatRoom";
import { Nav } from "../Nav";
import { SideDrawer } from "../SideDrawer";
import { Backdrop } from "../Backdrop";

import { Container } from "../../../GenericStyledComponents/index.styled";
import { LookingTable } from "../Feeds/Looking";
import { HiringTable } from "../Feeds/Hiring";

export default function MainUI(props) {
  const { socket } = props;

  const {
    mainUIState: {
      rooms,
      selectedChatroom,
      guestInfo,
      featuredChatMembers,
      onlineMembers,
    },
    onSendMessage,
    onEnterChat,
    onSelectRoom,
    onDeleteRoom,
  } = useAlgoState(socket);

  const [open, setOpen] = React.useState(true);
  const [mode, setMode] = React.useState("talent");

  useEffect(() => {
    const guestInfo =
      localStorage.getItem("guestInfo") &&
      JSON.parse(localStorage.getItem("guestInfo"));

    if (guestInfo && guestInfo.name && guestInfo.email) {
      onEnterChat(guestInfo);
    } else {
      onEnterChat(null);
    }
  }, []);

  const chatroomData =
    (rooms &&
      rooms.find((u) => {
        return u.roomID === (selectedChatroom && selectedChatroom.roomID);
      })) ||
    null;

  return !guestInfo ? (
    <div>
      <CollectChatGuestInfo
        handleSubmitCallback={(formData) => {
          onEnterChat(formData);
        }}
      />
    </div>
  ) : (
    <>
      <Nav onClick={() => setOpen(!open)} onEnterChat={onEnterChat} />
      <SideDrawer
        show={open}
        closeDrawer={() => setOpen(false)}
        onSelectRoom={onSelectRoom}
        onDeleteRoom={onDeleteRoom}
        rooms={rooms}
        featuredChatMembers={featuredChatMembers}
        selectedChatroom={selectedChatroom}
        guestInfo={guestInfo}
        onlineMembers={onlineMembers}
      />
      {open && <Backdrop onClick={() => setOpen(false)} />}

      <Container>
        <ButtonGroup style={{ margin: "1em" }} aria-label="Mode">
          <Button variant="secondary" onClick={() => setMode("talent")}>
            I'm Looking...
          </Button>
          <Button variant="secondary" onClick={() => setMode("opportunities")}>
            I'm Hiring...
          </Button>
        </ButtonGroup>

        {mode === "opportunities" ? <LookingTable /> : <HiringTable />}
      </Container>

      {selectedChatroom && chatroomData && (
        <ChatRoom
          mode={mode}
          selectedChatroom={selectedChatroom}
          chatroomData={chatroomData}
          guestInfo={guestInfo}
          onSendMessage={onSendMessage}
        />
      )}
    </>
  );
}
