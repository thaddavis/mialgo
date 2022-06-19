import * as React from "react";

import { IoLogOutOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

import {
  Toolbar,
  Navigation,
  Links,
  Items,
  ListItem,
  Spacer,
  LogoBlock,
} from "./styles";

import DrawerToggleButton from "../SideDrawerAlt/DrawerToggleButton";

export function Nav(props) {
  let navigate = useNavigate();

  const { onClick } = props;

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
                  // onEnterChat(null);
                }}
              >
                <IoLogOutOutline
                  onClick={() => {
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
