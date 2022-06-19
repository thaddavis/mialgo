import React, { useRef, useState, useEffect } from "react";
import { Paper, TextField, Button, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { GiTotemHead } from "react-icons/gi";

import clsx from "clsx";

const MessageContainer = styled.div`
  overflow-y: auto;
  height: 85%;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Container = styled.div`
  overflow-y: auto;
  height: 85%;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
`;

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#263238",
  },
  paper: {
    width: "50em",
    height: "80%",
    position: "relative",
  },
  action: {
    display: "flex",
    width: "96%",
    alignItems: "center",
    margin: "1em",
    position: "absolute",
    bottom: 0,
  },
  sendButton: {
    width: "10em",
    height: "50%",
    margin: "0 2em",
  },
  messageInput: {
    width: "100%",
  },
  messageContainer: {
    overflowY: "auto",
    height: "85%",
  },
  divider: {
    margin: "0.1em",
  },
  message: {
    listStyle: "none",
  },
  owner: {
    margin: "1em",
    backgroundColor: "#0091EA",
    padding: "0.5em 1.5em",
    borderRadius: "20px",
    color: "#FFF",
    wordBreak: "break-word",
    maxWidth: "65%",
    width: "fit-content",
    marginRight: "auto",
  },
  guest: {
    margin: "1em",
    backgroundColor: "#8BC34A",
    padding: "0.5em 1.5em",
    borderRadius: "20px",
    color: "#FFF",
    wordBreak: "break-word",
    maxWidth: "65%",
    width: "fit-content",
    // marginLeft: "auto",
    marginRight: "auto",
  },
  ownerName: {
    margin: "1em",
    // backgroundColor: "#0091EA",
    padding: "0.5em 0.5em",
    borderRadius: "20px",
    color: "#000",
    wordBreak: "break-word",
    maxWidth: "65%",
    width: "fit-content",
    marginRight: "auto",
  },
  guestName: {
    margin: "1em",
    padding: "0.5em 0.5em",
    borderRadius: "20px",
    color: "#000",
    wordBreak: "break-word",
    maxWidth: "65%",
    width: "fit-content",
    marginRight: "auto",
  },
  ol: {
    paddingInlineEnd: "16px",
    paddingInlineStart: "16px",
  },
});

const ChatRoom = (props) => {
  //   const { messages, sendMessage } = useChat();
  //   const user = props.selectedChatroom;
  //   const chatroomData = props.chatroomData;

  console.log("*** Room.js ***", props);

  const { onSendMessage, selectedChatroom, chatroomData, guestInfo, mode } =
    props;
  const [newMessage, setNewMessage] = useState("");
  const classes = useStyles();
  const messageRef = useRef();

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage !== "") {
      onSendMessage(newMessage, selectedChatroom);
      setNewMessage("");
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      if (newMessage !== "") {
        onSendMessage(newMessage, selectedChatroom);
        setNewMessage("");
      }
    }
  };

  useEffect(() => {
    // debugger;

    messageRef.current.scrollIntoView({ behavior: "smooth" });
  });

  // debugger;

  return (
    <Container>
      <Paper elevation={5} className={classes.paper}>
        <h1
          style={{
            textAlign: "center",
            margin: "0.5em",
          }}
        >
          {chatroomData.name}
        </h1>

        <MessageContainer>
          <ol className={classes.ol}>
            {chatroomData &&
              chatroomData.messages.map((message, i) => {
                return (
                  <div key={i}>
                    <hr
                      style={{
                        opacity: "0.5",
                      }}
                    />
                    <li
                      className={clsx(
                        classes.message,
                        message.fromSelf ||
                          message.fromGuestInfo.email === guestInfo.email
                          ? classes.ownerName
                          : classes.guestName
                      )}
                    >
                      <GiTotemHead />
                      &nbsp;
                      <small>
                        {message.fromGuestInfo.name ||
                          message.fromGuestInfo.email}
                      </small>
                    </li>
                    <li
                      key={i}
                      className={clsx(
                        classes.message,
                        message.fromSelf ||
                          message.fromGuestInfo.email === guestInfo.email
                          ? classes.owner
                          : classes.guest
                      )}
                    >
                      <span>{message.content}</span>
                    </li>
                  </div>
                );
              })}
          </ol>
          <div ref={messageRef}></div>
        </MessageContainer>
        <div className={classes.action}>
          <TextField
            className={classes.messageInput}
            id="message"
            label="Message"
            placeholder="enter message here"
            variant="outlined"
            value={newMessage}
            onChange={handleNewMessageChange}
            onKeyUp={handleKeyUp}
          />
          <Button
            disabled={!newMessage}
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            className={classes.sendButton}
          >
            Send
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default React.memo(ChatRoom, (prevProps, nextProps) => {
  // console.log("memoize shouldComponentUpdate - Room Component");
  // console.log(
  //   prevProps.selectedChatroom && prevProps.selectedChatroom.sessionID
  // );
  // console.log(
  //   nextProps.selectedChatroom && nextProps.selectedChatroom.sessionID
  // );
  // console.log(prevProps.chatroomData && prevProps.chatroomData.hasNewMessages);
  // console.log(nextProps.chatroomData && nextProps.chatroomData.hasNewMessages);
  // console.log(prevProps, nextProps);

  const propsEqual =
    (prevProps.selectedChatroom && prevProps.selectedChatroom.roomID) ===
      (nextProps.selectedChatroom && nextProps.selectedChatroom.roomID) &&
    nextProps.chatroomData &&
    !nextProps.chatroomData.hasNewMessages;

  // console.log("propsEqual?", propsEqual);

  return propsEqual;
});
