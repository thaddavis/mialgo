import styled from "styled-components";

export const RoomContainer = styled.div`
  b {
    cursor: pointer;
  }

  .selected {
    background-color: #1164a3;
  }

  .room {
    padding: 10px;
  }

  .room-selected {
    border: 1px solid #1164a3;
    background-color: #1164a3;
  }

  .description {
    display: inline-block;
  }

  .status {
    color: #92959e;
  }

  .new-messages {
    color: white;
    background-color: red;
    width: 20px;
    border-radius: 5px;
    text-align: center;
    float: right;
    margin-top: 10px;
  }
`;
