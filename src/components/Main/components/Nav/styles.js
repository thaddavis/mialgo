import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Toolbar = styled.header`
  position: fixed;
  /* opacity: 0; */
  width: 100%;
  top: 0;
  left: 0;
  background: white;
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 75;
`;

export const Navigation = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  // background-color: #01bf71;
  background: linear-gradient(
    108deg,
    rgba(189, 75, 144, 1) 0%,
    rgba(100, 33, 141, 1) 100%
  );
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const LogoBlock = styled.div`
  margin-left: 1rem;

  /* @media (min-width: 769px) {
    margin-left: 0rem;
  } */
`;

// export const Logo = styled.a`
//   color: black;
//   text-decoration: none;
//   font-size: 1.5rem;
//   border-bottom: 1px solid black;
// `

export const Items = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  /* @media (max-width: 768px) {
    display: none;
  } */
`;

export const ListItem = styled.li`
  padding: 0.5rem;
`;

export const Links = styled.span`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  border-bottom: 1px solid ${(props) => (props.matched ? "black" : "white")};

  &:hover {
    color: rgba(189, 75, 144, 1);
  }

  &:active {
    color: rgba(100, 33, 141, 1);
  }
`;

export const LinksR = styled(LinkR)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  border-bottom: 1px solid ${(props) => (props.matched ? "black" : "white")};

  &:hover {
    color: rgba(189, 75, 144, 1);
  }

  &:active {
    color: rgba(100, 33, 141, 1);
  }
`;
