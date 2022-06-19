import React from "react";
import { Backdrop } from "./components/Backdrop";
import { Nav } from "./components/Nav";
import { SideDrawer } from "./components/SideDrawerAlt/SideDrawer";
import { Container } from "../GenericStyledComponents/index.styled";

export default function About(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Nav onClick={() => setIsOpen(!isOpen)} />
      <SideDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}

      <Container noTopMargin={false}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 80px)",
          }}
        >
          <h1
            style={{
              fontSize: "3.2rem",
              textAlign: "center",
            }}
          >
            About
          </h1>
          <p
            style={{
              fontSize: "1.6rem",
              textAlign: "center",
            }}
          >
            Mialgo's first venture was to aggregate all the job opportunities
            that were represented at the "Miami for Everyone" tech event.
          </p>
        </div>
      </Container>
    </>
  );
}
