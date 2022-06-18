import styled from "styled-components";

export const Nav = styled.nav`
  /* height: 100%; */
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  // color: white;
  color: black
  padding: 0em;
  // background: #101522;
  background: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  transform: ${(props) =>
    props.show ? `translateX(0%)` : `translateX(-100%)`};
  transition: transform 0.3s ease-out;

  h2 {
    padding: 0.2em;
  }

  #featured,
  #rooms,
  #members {
    padding: 0em;
    border: 1px solid white;
    height: calc(100vh / 2);
    overflow: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const List = styled.ul`
  height: 100%;
  list-style: none;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`;

export const ListItem = styled.span`
  margin: 0.5rem 0;
  font-size: 1.2em;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: red;
  }

  &:active {
    color: blue;
  }
`;
