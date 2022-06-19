import { navOptions } from "./data/navOptions";
import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { SideDrawerStyled } from "./SideDrawer.styled";
import { CloseButtonStyled } from "./CloseButton.styled";

import { AiOutlineClose } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

interface P {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  sectionRefs?: MutableRefObject<Record<string, HTMLDivElement>>;
  currentSection?: string | undefined;
}

export function SideDrawer({
  isOpen,
  setIsOpen,
  sectionRefs,
  currentSection,
}: P) {
  let navigate = useNavigate();

  return (
    <>
      <SideDrawerStyled isOpen={isOpen}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "0 0.2em",
          }}
          id="nav-icon1"
        >
          <CloseButtonStyled isOpen={isOpen} onClick={() => setIsOpen(false)}>
            {/* <span></span>
            <span></span>
            <span></span> */}
            <AiOutlineClose />
          </CloseButtonStyled>
        </div>
        <nav id="side-drawer">
          <ul>
            {navOptions.map((i: any, idx: any) => {
              return (
                <li
                  key={i.key}
                  className={currentSection === i.key ? "active" : ""}
                  onClick={() => {
                    setIsOpen(false);
                    navigate(i.path, { replace: false });
                    // const key: string = i.key;
                  }}
                >
                  {i.name}&nbsp;
                  {i.img && (
                    <img alt="chain logo" src={i.img} width={40} height={40} />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </SideDrawerStyled>
    </>
  );
}
