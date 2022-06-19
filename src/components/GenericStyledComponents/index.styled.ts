import styled from "styled-components";

export const Container = styled.div<{
  noTopMargin: boolean;
}>`
  width: 100%;
  min-height: 100vh;
  padding: 1em;
  padding-top: ${(props) => {
    const { noTopMargin } = props;
    return noTopMargin ? "0px" : "80px";
  }};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
