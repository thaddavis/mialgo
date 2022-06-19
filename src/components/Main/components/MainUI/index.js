import React, { useEffect } from "react";
import useAlgoState from "../../useAlgoState";
import { Nav } from "../Nav";
import { SideDrawer } from "../SideDrawerAlt/SideDrawer";
import { Backdrop } from "../Backdrop";

import { Container } from "../../../GenericStyledComponents/index.styled";
import { HiringTable } from "../Feeds/Hiring";

export default function MainUI(props) {
  const { socket } = props;

  const {
    mainUIState: { rooms, selectedChatroom, guestInfo },
    onEnterChat,
  } = useAlgoState(socket);

  const [isOpen, setIsOpen] = React.useState(false);
  const [mode, setMode] = React.useState("talent");

  useEffect(() => {
    // const guestInfo =
    //   localStorage.getItem("guestInfo") &&
    //   JSON.parse(localStorage.getItem("guestInfo"));
    // if (guestInfo && guestInfo.name && guestInfo.email) {
    //   onEnterChat(guestInfo);
    // } else {
    //   onEnterChat(null);
    // }
  }, []);

  return (
    <>
      <Nav onClick={() => setIsOpen(!isOpen)} onEnterChat={onEnterChat} />
      <SideDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}

      <Container>
        <HiringTable />
      </Container>

      {/* {selectedChatroom && chatroomData && (
        <ChatRoom
          mode={mode}
          selectedChatroom={selectedChatroom}
          chatroomData={chatroomData}
          guestInfo={guestInfo}
          onSendMessage={onSendMessage}
        />
      )} */}
    </>
  );
}
