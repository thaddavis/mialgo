import React, { useState, useEffect } from "react";
import MainUI from "./components/MainUI";
import { toast } from "react-toastify";

import { checkOutBlock } from "../../services/checkOutBlock";
import { getNodeStatus } from "../../services/getNodeStatus";
import { accountInformation } from "../../services/accountInformation";
import { getTransactions } from "../../services/getTransactions";
import { getPendingTransactions } from "../../services/getPendingTransactions";

export default function Main() {
  useEffect(() => {
    // console.log("___ _@@@_ ___", process.env.REACT_APP_PURE_STAKE_API_KEY);

    async function loadMessages() {
      try {
        console.log("loadMessages");

        // vvv vvv vvv
        // checkOutBlock();
        // getNodeStatus();
        // accountInformation();
        getTransactions();
        // ^^^ ^^^ ^^^

        toast.success("🦄 Wow so easy!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (e) {
        toast.error(`${e.toString()}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }

    loadMessages();

    return () => {
      // newSocket.close();
    };
  }, []);

  return (
    <div className="App">
      {/* <header className="app-header">React Chat</header> */}
      {/* {socket ? ( */}
      <div className="chat-container">
        <MainUI socket={null} />
      </div>
      {/* ) : (
        <>NOT CONNECTED</>
      )} */}
    </div>
  );
}
