import * as React from "react";

import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

import {
  Toolbar,
  Navigation,
  Links,
  LinksR,
  Items,
  ListItem,
  Spacer,
  LogoBlock,
} from "./styles";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

export function Nav(props) {
  let navigate = useNavigate();

  const { onClick, onEnterChat } = props;

  return (
    <Toolbar>
      <Navigation>
        <div>
          <DrawerToggleButton onClick={onClick} />
        </div>
        <LogoBlock>
          {/* <LinksR to="/">
            <AiOutlineHome />
          </LinksR> */}
        </LogoBlock>
        <Spacer />
        <div>
          <Items>
            <ListItem>
              <Links
                onClick={() => {
                  onEnterChat(null);
                }}
              >
                <IoLogOutOutline
                  onClick={() => {
                    // console.log("asdf");
                    navigate("/");
                  }}
                />
              </Links>
            </ListItem>
          </Items>
        </div>
      </Navigation>
    </Toolbar>
  );
}
