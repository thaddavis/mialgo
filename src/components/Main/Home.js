import React, { useState, useEffect } from "react";
import MainUI from "./components/MainUI";
import { toast } from "react-toastify";

import { checkOutBlock } from "../../services/checkOutBlock";
import { getNodeStatus } from "../../services/getNodeStatus";
import { accountInformation } from "../../services/accountInformation";
import { getTransactions } from "../../services/getTransactions";
import { getPendingTransactions } from "../../services/getPendingTransactions";

import CollectChatGuestInfo from "../../components/Forms/CollectChatGuestInfo";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <div className="chat-container">
        <div>
          <CollectChatGuestInfo
            handleSubmitCallback={(formData) => {
              navigate("/main", { replace: false });
            }}
          />
        </div>
      </div>
    </div>
  );
}
