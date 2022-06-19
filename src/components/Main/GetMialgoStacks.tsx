import React from "react";
import { Backdrop } from "./components/Backdrop";
import { Nav } from "./components/Nav";
import { SideDrawer } from "./components/SideDrawerAlt/SideDrawer";
import { Container } from "../GenericStyledComponents/index.styled";
import { CardGrid } from "../GenericStyledComponents/Card.styled";

// import { QRCodesAlgorand } from "./GetMialgoData";

interface P {}

export default function GetMialgoStacks(props: P) {
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
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 80px)",
          }}
        >
          <h1>Coming Soon...</h1>
        </div>
        {/* <div className="container">
            <div className="card__wrap--outer">
              {[
                {
                  image: "",
                  description: "",
                  name: "",
                },
              ].map((i: any, idx) => {
                return (
                  <div key={i.name} className="card__wrap--inner">
                    <div className="card">
                      <img alt="opportunity" src={i.image} />
                      <div className="card__item"></div>
                      <div className="card__item  flexible">
                        <small>{i.description}</small>
                      </div>
                      <div className="card__footer"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}
      </Container>
    </>
  );
}
