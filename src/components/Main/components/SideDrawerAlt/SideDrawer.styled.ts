import styled from "styled-components";

interface StyledProps {
  isOpen: boolean;
}

export const SideDrawerStyled = styled.div<Pick<StyledProps, "isOpen">>`
  height: 100%;
  width: ${(props) => (props.isOpen ? "80%" : "0%")};
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;

  #side-drawer ul {
    & li {
      cursor: pointer;
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 1.5rem;
      color: rgba(100, 33, 141, 1);
      display: block;
      transition: 0.3s;
      caret-color: transparent;
      white-space: nowrap;

      &.active {
        color: black;
      }
    }
  }

  a:hover {
    color: #f1f1f1;
  }

  #nav-options {
    margin-top 16px;
    color: white;
  }

  padding-top: 15px;
  font-size: 18px;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: ${(props) => (props.isOpen ? "50%" : "0%")};
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: ${(props) => (props.isOpen ? "25%" : "0%")};
  }
`;
