import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkR,
  // SideBtnWrap,
  // SidebarRoute
} from "./SidebarElements";

import { animateScroll as scroll } from "react-scroll";

function Sidebar({ isOpen, toggle }) {
  const onClick = () => {
    toggle();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={onClick}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {/* <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink> */}
          {/* <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink> */}
          {/* <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink> */}
          <SidebarLinkR
            to="portfolio"
            onClick={() => {
              toggle();
              scroll.scrollToTop();
            }}
          >
            Portfolio
          </SidebarLinkR>
          <SidebarLinkR
            to="pricing"
            onClick={() => {
              toggle();
              scroll.scrollToTop();
            }}
          >
            Pricing
          </SidebarLinkR>
        </SidebarMenu>
        {/* <SideBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
