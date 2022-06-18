import * as React from "react";

import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";

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
                <IoLogOutOutline />
              </Links>
            </ListItem>
          </Items>
        </div>
      </Navigation>
    </Toolbar>
  );
}
